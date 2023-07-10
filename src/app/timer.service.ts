import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimerType } from './timer-type.enum';

const POMODORO_TIME = 25;
const SHORT_BREAK_TIME = 5;
const LONG_BREAK_TIME = 15;

const POMODORO_KEY = 'pomodoroTime';
const SHORT_BREAK_KEY = 'shortBreakTime';
const LONG_BREAK_KEY = 'longBreakTime';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerType$ = new BehaviorSubject<TimerType>(TimerType.POMODORO);

  private _pomodoroTime: number;
  private _shortBreakTime: number;
  private _longBreakTime: number;

  constructor() {
    this._pomodoroTime = this.getInitialValue(POMODORO_KEY, POMODORO_TIME);
    this._shortBreakTime = this.getInitialValue(SHORT_BREAK_KEY, SHORT_BREAK_TIME);
    this._longBreakTime = this.getInitialValue(LONG_BREAK_KEY, LONG_BREAK_TIME);
  }

  get pomodoroTime(): number {
    return this._pomodoroTime;
  }

  set pomodoroTime(time: number) {
    this._pomodoroTime = time;
    localStorage.setItem(POMODORO_KEY, time.toString());
  }

  get shortBreakTime(): number {
    return this._shortBreakTime;
  }

  set shortBreakTime(time: number) {
    this._shortBreakTime = time;
    localStorage.setItem(SHORT_BREAK_KEY, time.toString());
  }

  get longBreakTime(): number {
    return this._longBreakTime;
  }

  set longBreakTime(time: number) {
    this._longBreakTime = time;
    localStorage.setItem(LONG_BREAK_KEY, time.toString());
  }

  private getInitialValue(key: string, defaultValue: number): number {
    const storedValue = localStorage.getItem(key);
    return storedValue ? +storedValue : defaultValue;
  }
}
