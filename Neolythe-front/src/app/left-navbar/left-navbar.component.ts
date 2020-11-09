import { Component, OnInit } from '@angular/core';

interface CustomLinks {
  routerLinkActive: boolean;
  routerLink: string;
  iconName: string;
  linkName: string;
}

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.scss']
})
export class LeftNavbarComponent implements OnInit {
  public arrayLinks: CustomLinks[] = [];

  constructor() {
    this.arrayLinks = [
      {
        routerLinkActive: true,
        routerLink: '/dashboard',
        iconName: 'dashboard',
        linkName: 'Dashboard'
      },
      {
        routerLinkActive: false,
        routerLink: '#',
        iconName: 'pie_chart',
        linkName: 'Charts'
      },
      {
        routerLinkActive: false,
        routerLink: '#',
        iconName: 'attach_money',
        linkName: 'Crypto'
      },
      {
        routerLinkActive: false,
        routerLink: '#',
        iconName: 'folder',
        linkName: 'Projects'
      },
      {
        routerLinkActive: true,
        routerLink: '/about',
        iconName: 'info',
        linkName: 'About'
      }
    ]
   }

  ngOnInit(): void {
  }

}
