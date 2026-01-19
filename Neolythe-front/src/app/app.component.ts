import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router, NavigationEnd,  RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports : [RouterModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, LeftNavbarComponent],
    standalone: true
})
export class AppComponent implements OnInit, OnDestroy {

  public isSmallDevice: boolean = false;
  public currentNavigationPath: string = "";
  private subscriptions: Map<string, Subscription>;
  
  constructor(protected router: Router, protected viewport: ViewportRuler) {}

  public ngOnInit(): void {
    this._initSubscriptions();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private _initSubscriptions(): void {
    this.subscriptions = new Map();
    this.subscriptions.set('navigationSubscription', this._changeRoutePathSubscription());
    this.subscriptions.set('viewportChangeSubscription', this._viewportWithChangeSubscription());
  }

  private _changeRoutePathSubscription(): Subscription {
    return this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      this.currentNavigationPath = event.url;
    });
  }

  private _viewportWithChangeSubscription(): Subscription {
    return this.viewport.change(500)
    .subscribe(() => {
      this.isSmallDevice = this.viewport.getViewportSize().width < 768;
    });
  }
}
