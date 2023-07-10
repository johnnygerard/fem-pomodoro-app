import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-up-arrow-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
<svg width="14" height="7" viewBox="0 0 14 7" fill="none">
<path d="M1 6L7 2L13 6" stroke="#1E213F" stroke-opacity="0.25" stroke-width="2"/>
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
export class UpArrowSvgComponent {

}
