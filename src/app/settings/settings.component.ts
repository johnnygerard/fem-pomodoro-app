import { ChangeDetectorRef, Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossSvgComponent } from '../svg/cross-svg.component';
import { CheckmarkSvgComponent } from '../svg/checkmark-svg.component';
import { UpArrowSvgComponent } from '../svg/up-arrow-svg.component';
import { DownArrowSvgComponent } from '../svg/down-arrow-svg.component';
import { Color } from '../color.enum';
import { Key } from '../key.enum';
import { Font } from '../font.enum';
import { FormsModule } from '@angular/forms';
import { TimerService } from '../timer.service';
import { TimerType } from '../timer-type.enum';

const body = window.document.body;

type TimerSettings = {
  label: string,
  timeSpan: number,
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CrossSvgComponent,
    CheckmarkSvgComponent,
    UpArrowSvgComponent,
    DownArrowSvgComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  protected colorTheme: Color;
  protected fontTheme: Font;
  protected timerSettings: TimerSettings[];

  @Output() closeDialogEvent = new EventEmitter<void>();

  constructor(
    private readonly renderer: Renderer2,
    private readonly timerService: TimerService,
  ) {
    // Initialize color and font themes
    const colorTheme = body.getAttribute(Key.COLOR);
    const fontTheme = body.getAttribute(Key.FONT);

    if (colorTheme === null || fontTheme === null)
      throw Error('Missing one or more theme attributes');
    this.colorTheme = +colorTheme;
    this.fontTheme = +fontTheme;

    // Initialize timer settings
    this.timerSettings = [
      {
        label: TimerType.POMODORO,
        timeSpan: this.timerService.pomodoroTime,
      },
      {
        label: TimerType.SHORT_BREAK,
        timeSpan: this.timerService.shortBreakTime,
      },
      {
        label: TimerType.LONG_BREAK,
        timeSpan: this.timerService.longBreakTime,
      },
    ];
  }

  protected closeDialog(): void {
    this.closeDialogEvent.emit();
  }


  protected stepUp(input: HTMLInputElement): void {
    input.stepUp();

    // Notify ngModel of the update
    input.dispatchEvent(new Event('input'));
  }

  protected stepDown(input: HTMLInputElement): void {
    input.stepDown();

    // Notify ngModel of the update
    input.dispatchEvent(new Event('input'));
  }

  protected applySettings(): void {
    this.renderer.setAttribute(body, Key.COLOR, this.colorTheme.toString());
    this.renderer.setAttribute(body, Key.FONT, this.fontTheme.toString());
    
    for (const { label, timeSpan } of this.timerSettings) {
      switch (label) {
        case TimerType.POMODORO:
          this.timerService.pomodoroTime = timeSpan;
          break;
        case TimerType.SHORT_BREAK:
          this.timerService.shortBreakTime = timeSpan;
          break;
        case TimerType.LONG_BREAK:
          this.timerService.longBreakTime = timeSpan;
          break;
      }
    }

    this.closeDialog();
  }
}
