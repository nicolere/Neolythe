import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ProjectDataComponent } from './project-data/project-data.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [AboutProjectComponent, ProjectDataComponent],
    standalone: true
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
