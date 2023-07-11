import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkmark-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
<svg width="15" height="11" viewBox="0 0 15 11" fill="none">
<path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="#161932" stroke-width="2"/>
</svg>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class CheckmarkSvgComponent {

}