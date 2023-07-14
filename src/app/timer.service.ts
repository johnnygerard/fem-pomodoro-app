import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TimerType } from './timer-type.enum';
import { Key } from './key.enum';

export const POMODORO_TIME = 25;
export const SHORT_BREAK_TIME = 5;
export const LONG_BREAK_TIME = 15;

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerType$ = new BehaviorSubject<TimerType>(TimerType.POMODORO);

  // Notify the timer component when the timer settings have changed.
  timerSettings$ = new Subject<TimerType>();

  private _pomodoroTime: number;
  private _shortBreakTime: number;
  private _longBreakTime: number;

  constructor() {
    const getInitialValue = (key: string, defaultValue: number): number => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? +storedValue : defaultValue;
    };

    this._pomodoroTime = getInitialValue(Key.POMODORO, POMODORO_TIME);
    this._shortBreakTime = getInitialValue(Key.SHORT_BREAK, SHORT_BREAK_TIME);
    this._longBreakTime = getInitialValue(Key.LONG_BREAK, LONG_BREAK_TIME);
  }

  /**
   * Return the initial time in milliseconds for the current timer type.
   */
  get initialTime(): number {
    let time: number;

    switch (this.timerType$.value) {
      case TimerType.POMODORO:
        time = this.pomodoroTime;
        break;
      case TimerType.SHORT_BREAK:
        time = this.shortBreakTime;
        break;
      case TimerType.LONG_BREAK:
        time = this.longBreakTime;
        break;
    }

    return time * 6e4;
  }

  get pomodoroTime(): number {
    return this._pomodoroTime;
  }

  set pomodoroTime(time: number) {
    this._pomodoroTime = time;
    localStorage.setItem(Key.POMODORO, time.toString());
  }

  get shortBreakTime(): number {
    return this._shortBreakTime;
  }

  set shortBreakTime(time: number) {
    this._shortBreakTime = time;
    localStorage.setItem(Key.SHORT_BREAK, time.toString());
  }

  get longBreakTime(): number {
    return this._longBreakTime;
  }

  set longBreakTime(time: number) {
    this._longBreakTime = time;
    localStorage.setItem(Key.LONG_BREAK, time.toString());
  }
}
