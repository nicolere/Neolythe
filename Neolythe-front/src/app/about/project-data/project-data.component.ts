import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { PROJECT_DATA } from './mock-project-data';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.scss']
})
export class ProjectDataComponent implements OnInit, AfterViewInit {

  @ViewChild('divData' , {static: false}) el: ElementRef<HTMLDivElement>

  public projectData = PROJECT_DATA;

  constructor() { }
  
  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement.children, {
      delay: 1,
      autoAlpha: 0,
      y: -20,
      stagger: 0.5
    })
  }
}
