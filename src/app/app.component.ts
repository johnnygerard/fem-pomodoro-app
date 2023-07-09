import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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
