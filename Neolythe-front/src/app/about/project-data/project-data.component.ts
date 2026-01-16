import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { PROJECT_DATA } from './mock-project-data';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AnimatedCounterDirective } from 'src/app/directives/animated-counter.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-project-data',
    templateUrl: './project-data.component.html',
    styleUrls: ['./project-data.component.scss'],
    imports: [NgIf, MatCardModule, MatIconModule, AnimatedCounterDirective],
    standalone: true
})
export class ProjectDataComponent implements AfterViewInit {

  @ViewChild('divData' , {static: false}) el: ElementRef<HTMLDivElement>

  public projectData = PROJECT_DATA;

  constructor() { }

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement.children, {
      delay: 1,
      autoAlpha: 0,
      y: -20,
      stagger: 0.5
    })
  }
}
