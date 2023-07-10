import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CheckmarkSvgComponent } from './svg/checkmark-svg.component';
import { CrossSvgComponent } from './svg/cross-svg.component';
import { DownArrowSvgComponent } from './svg/down-arrow-svg.component';
import { GearSvgComponent } from './svg/gear-svg.component';
import { UpArrowSvgComponent } from './svg/up-arrow-svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CheckmarkSvgComponent,
    CrossSvgComponent,
    DownArrowSvgComponent,
    GearSvgComponent,
    UpArrowSvgComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (environment.production) {
      console.log(`Challenge by Frontend Mentor. Coded by Johnny Gérard.

Portfolio: https://www.frontendmentor.io/profile/johnnygerard`);
    }
  }
}
