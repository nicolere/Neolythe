import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { routeTransitionAnimations } from './route-animations-transitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  animations: [routeTransitionAnimations]
})
export class AppComponent {

  constructor(private router: Router) {}

  isDashboardUrl(): boolean {
    console.log(this.router.url)
    return (this.router.url === '/dashboard' || this.router.url !== '/about');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
