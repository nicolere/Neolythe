import { Component, Inject, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { routeTransitionAnimations } from './route-animations-transitions';
import { filter } from 'rxjs/operators';
import { ScreenObserverService } from './service/screen-observer.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routeTransitionAnimations],
    providers: [ScreenObserverService],
    standalone: false
})
export class AppComponent implements OnDestroy {

  @Inject(Router) router: Router;

  watcher: Subscription;
  // activeMediaQuery: any = [];

  public isSmallDevice: boolean = false;
  public currentNavigationPath: string = "";
  
  constructor() {
    // this.watcher = screenObserverService.getActiveMediaQuery()
    // .subscribe((changes: string[]) => {
    //     changes.includes('md') || changes.includes('sm') || changes.includes('xs') 
    //     ? this.isSmallDevice = true
    //     : this.isSmallDevice = false   
    //   });

    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
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
