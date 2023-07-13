import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-down-arrow-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
<svg width="14" height="7" viewBox="0 0 14 7" fill="none">
<path d="M1 1L7 5L13 1" stroke="#1E213F" stroke-opacity="0.25" stroke-width="2"/>
</svg>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      path:hover {
        stroke-opacity: 1;
      }
    `
  ]
})
export class DownArrowSvgComponent {

}
