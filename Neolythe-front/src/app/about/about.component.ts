import { Component, OnInit } from '@angular/core';
import { ScreenObserverService } from '../service/screen-observer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isSmallDevice: boolean = false;

  constructor(screenObserverService: ScreenObserverService) {
    screenObserverService.getActiveMediaQuery()
    .subscribe((changes: string[]) => {
          changes.includes('sm') || changes.includes('xs') 
          ? this.isSmallDevice = true
          : this.isSmallDevice = false   
      });
  }

  public ngOnInit(): void {
  }
}
