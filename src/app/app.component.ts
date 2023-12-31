import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { Key } from './key.enum';
import { Font } from './font.enum';
import { Color } from './color.enum';
import { TimerSelectorComponent } from './timer-selector/timer-selector.component';
import { TimerComponent } from './timer/timer.component';
import { GearSvgComponent } from './svg/gear-svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TimerSelectorComponent,
    TimerComponent,
    GearSvgComponent,
    SettingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected settingsOpen = false;
  
  constructor(renderer: Renderer2) {
    // Initialize color and font themes.
    const fontTheme = window.localStorage.getItem(Key.FONT) ?? Font.SANS_SERIF;
    const colorTheme = window.localStorage.getItem(Key.COLOR) ?? Color.CORAL_PINK;

    renderer.setAttribute(window.document.body, Key.FONT, fontTheme.toString());
    renderer.setAttribute(window.document.body, Key.COLOR, colorTheme.toString());
  }
}
