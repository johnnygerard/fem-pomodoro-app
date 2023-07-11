import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerType } from '../timer-type.enum';
import { FormsModule } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timer-selector.component.html',
  styleUrls: ['./timer-selector.component.scss']
})
export class TimerSelectorComponent {
  protected timerTypes = [
    TimerType.POMODORO,
    TimerType.SHORT_BREAK,
    TimerType.LONG_BREAK
  ];

  private _selectedTimerType = TimerType.POMODORO;

  protected get selectedTimerType(): TimerType {
    return this._selectedTimerType;
  }

  protected set selectedTimerType(type: TimerType) {
    this._selectedTimerType = type;
    this.timerService.timerType$.next(type);
  }

  constructor(private readonly timerService: TimerService) { }
}
