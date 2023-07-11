import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSelectorComponent } from './timer-selector.component';

describe('TimerSelectorComponent', () => {
  let component: TimerSelectorComponent;
  let fixture: ComponentFixture<TimerSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimerSelectorComponent]
    });
    fixture = TestBed.createComponent(TimerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
