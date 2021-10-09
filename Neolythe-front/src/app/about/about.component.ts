import { Component, OnInit } from '@angular/core';
import { ScreenObserverService } from '../service/screen-observer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  watcher: Subscription;
  public isSmallDevice: boolean = false;

  constructor(private screenObserverService: ScreenObserverService) {
    this.watcher = screenObserverService.getActiveMediaQuery()
    .subscribe((changes: string[]) => {
          changes.includes('sm') || changes.includes('xs') 
          ? this.isSmallDevice = true
          : this.isSmallDevice = false   
      });
  }

  ngOnInit(): void {
  }
}
