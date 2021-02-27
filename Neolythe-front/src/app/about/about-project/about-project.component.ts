import { Component, ElementRef, Input, AfterViewInit, ViewChild} from '@angular/core';
import { PROJECT_COLLABORATORS } from './../mock-collaborators';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements AfterViewInit {

  @Input() isSmallDevice: boolean;
  @ViewChild('divDescription', {static: false}) el: ElementRef<HTMLDivElement>;

  public projectCollaborators = PROJECT_COLLABORATORS;

  constructor() { }

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement.children, {
      delay: 1,
      autoAlpha: 0,
      y: -20,
      stagger: 0.10
    })
  }

}
