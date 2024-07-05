import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.css',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
})
export class NavFooterComponent {

}
