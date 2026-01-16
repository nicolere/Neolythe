import { Component, } from '@angular/core';
import { Router, NavigationEnd,  RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports : [NgIf, RouterModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, LeftNavbarComponent],
    standalone: true
})
export class AppComponent {

  // TODO : Refacto small device only for sidenav mode behavior
  public isSmallDevice: boolean = false;
  public currentNavigationPath: string = "";
  
  constructor(protected router: Router) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      this.currentNavigationPath = event.url;
    })
  }
}
