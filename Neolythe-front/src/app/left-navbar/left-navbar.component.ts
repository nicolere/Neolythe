import { Component, OnInit } from '@angular/core';
import { NAVIGATION_LINKS } from './mock-nav-links'

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.scss']
})
export class LeftNavbarComponent implements OnInit {

  public navigationLinks = NAVIGATION_LINKS;

  constructor() {}

  public ngOnInit(): void {
  }

}
