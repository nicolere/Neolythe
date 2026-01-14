import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  watcher: Subscription;
  public isSmallDevice: boolean = false;

  constructor() {
    // this.watcher = screenObserverService.getActiveMediaQuery()
    // .subscribe((changes: string[]) => {
    //       changes.includes('sm') || changes.includes('xs') 
    //       ? this.isSmallDevice = true
    //       : this.isSmallDevice = false   
    //   });
  }

  ngOnInit(): void {
  }
}
