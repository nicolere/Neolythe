import { Component } from '@angular/core';
import { NAVIGATION_LINKS } from './mock-nav-links'
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-left-navbar',
    templateUrl: './left-navbar.component.html',
    styleUrls: ['./left-navbar.component.scss'],
    imports: [NgFor, RouterLink, MatCardModule, MatListModule, MatSlideToggleModule, MatIconModule],
    standalone: true
})
export class LeftNavbarComponent {

  public navigationLinks = NAVIGATION_LINKS;

  constructor() {}

}
