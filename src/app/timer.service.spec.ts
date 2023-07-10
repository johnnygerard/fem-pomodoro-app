import { TestBed } from '@angular/core/testing';
import { LONG_BREAK_TIME, POMODORO_TIME, SHORT_BREAK_TIME, TimerService } from './timer.service';

describe('TimerService', () => {
  let service: TimerService;
  let randomTime: number;

  beforeEach(() => {
    randomTime = randomInt(1, 60);
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default pomodoro time', () => {
    expect(service.pomodoroTime).toEqual(POMODORO_TIME);
  });

  it('should set and get pomodoro time', () => {
    service.pomodoroTime = randomTime;

    expect(service.pomodoroTime).toEqual(randomTime);
  });

  it('should have default short break time', () => {
    expect(service.shortBreakTime).toEqual(SHORT_BREAK_TIME);
  });

  it('should set and get short break time', () => {
    service.shortBreakTime = randomTime;

    expect(service.shortBreakTime).toEqual(randomTime);
  });

  it('should have default long break time', () => {
    expect(service.longBreakTime).toEqual(LONG_BREAK_TIME);
  });

  it('should set and get long break time', () => {
    service.longBreakTime = randomTime;

    expect(service.longBreakTime).toEqual(randomTime);
  });

  it('should retrieve pomodoro time from local storage', () => {
    service.pomodoroTime = randomTime;
    service = TestBed.inject(TimerService);

    expect(service.pomodoroTime).toEqual(randomTime);
  });

  it('should retrieve short break time from local storage', () => {
    service.shortBreakTime = randomTime;
    service = TestBed.inject(TimerService);

    expect(service.shortBreakTime).toEqual(randomTime);
  });

  it('should retrieve long break time from local storage', () => {
    service.longBreakTime = randomTime;
    service = TestBed.inject(TimerService);

    expect(service.longBreakTime).toEqual(randomTime);
  });
});

/**
 * Generate a random integer between min and max (inclusive)
 */
function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
