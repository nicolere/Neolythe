import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { routeTransitionAnimations } from './route-animations-transitions';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnDestroy {

  watcher: Subscription;
  activeMediaQuery: any = [];

  public isSmallDevice: boolean = false;
  public currentNavigationPath: string = "";
  
  constructor(private mediaObserver: MediaObserver, private router: Router) {
    this.watcher = mediaObserver.asObservable()
    .pipe(
      distinctUntilChanged((prev: MediaChange[], curr: MediaChange[]) => prev[0].mqAlias === curr[0].mqAlias),
      map((arr: MediaChange[]) => arr.map((change: MediaChange) => change.mqAlias)),
      tap(change => this.activeMediaQuery.push(change)),
    )
    .subscribe((changes: string[]) => {
      changes.includes('sm') || changes.includes('xs') 
      ? this.isSmallDevice = true
      : this.isSmallDevice = false   
    });

    router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      console.log(event.url)
      this.currentNavigationPath = event.url;
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }
}
