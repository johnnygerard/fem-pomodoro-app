import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cross-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
<g id="Group 5" opacity="0.5">
<path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M13.3639 2.05044L11.9497 0.63623L6.99995 5.58598L2.0502 0.63623L0.635986 2.05044L5.58573 7.00019L0.635986 11.9499L2.0502 13.3642L6.99995 8.4144L11.9497 13.3642L13.3639 11.9499L8.41416 7.00019L13.3639 2.05044Z" fill="#1E213F"/>
</g>
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
export class CrossSvgComponent {

}
