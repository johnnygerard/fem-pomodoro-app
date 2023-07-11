import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { arc } from 'd3-shape';
import { TimerService } from '../timer.service';

/**
 * The value of each timer state is the button label.
 */
const enum TimerState {
  STOPPED = 'Start',
  RUNNING = 'Pause',
  FINISHED = 'Restart',
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @ViewChild('path', { static: true }) path!: ElementRef<SVGPathElement>;

  /**
   * Remaining time in milliseconds.
   */
  private remainingTime = 0;

  protected get seconds(): string {
    return this.leftPad(this.remainingSeconds % 60);
  }
  protected get minutes(): string {
    return this.leftPad(Math.floor(this.remainingSeconds / 60));
  }

  private get remainingSeconds(): number {
    return Math.ceil(this.remainingTime / 1e3);
  }

  private leftPad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  protected buttonLabel: TimerState = TimerState.STOPPED;
  private timerId = 0;

  constructor(
    private readonly renderer: Renderer2,
    private readonly timerService: TimerService
  ) {
    timerService.timerType$.subscribe(_ => {
      this.stopTimer();
      this.resetTimer();
    });
  }

  ngOnInit(): void {
    this.renderProgressBar();
  }

  protected onClick(): void {
    switch (this.buttonLabel) {
      case TimerState.STOPPED:
        this.startTimer();
        break;
      case TimerState.RUNNING:
        this.stopTimer();
        break;
      case TimerState.FINISHED:
        this.restartTimer();
        break;
    }
  }

  private resetTimer(): void {
    this.remainingTime = this.timerService.initialTime;
  }

  private startTimer(): void {
    const STEP = 20;
    
    this.buttonLabel = TimerState.RUNNING;
    this.timerId = window.setInterval(() => {
      this.remainingTime -= STEP;
      this.renderProgressBar(this.remainingTime / this.timerService.initialTime);

      if (this.remainingTime) return;

      this.stopTimer();
      this.buttonLabel = TimerState.FINISHED;
      this.renderProgressBar();
    }, STEP);
  }

  private stopTimer(): void {
    window.clearInterval(this.timerId);
    this.buttonLabel = TimerState.STOPPED;
  }

  private restartTimer(): void {
    this.resetTimer();
    this.startTimer();
  }

  private renderProgressBar(percentage: number = 1): void {
    const PROGRESS_BAR_WIDTH = 12;
    const PROGRESS_BAR_DIAMETER = 340;
    const PROGRESS_BAR_RADIUS = PROGRESS_BAR_DIAMETER / 2;
    const path = arc().cornerRadius(PROGRESS_BAR_WIDTH / 2)
      ({
        innerRadius: PROGRESS_BAR_RADIUS - PROGRESS_BAR_WIDTH,
        outerRadius: PROGRESS_BAR_RADIUS,
        startAngle: 0,
        endAngle: 2 * Math.PI * percentage,
      });

    if (path === null) throw Error('Null path');

    this.renderer.setAttribute(this.path.nativeElement, 'd', path);
  }
}
