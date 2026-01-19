import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent {

  public isSmallDevice: boolean = false;

  constructor() {
  }

}
