import { Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { PROJECT_COLLABORATORS } from './../mock-collaborators';
import { gsap } from 'gsap';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-about-project',
    templateUrl: './about-project.component.html',
    styleUrls: ['./about-project.component.scss'],
    imports: [MatIconModule, MatButtonModule],
    standalone: true
})
export class AboutProjectComponent implements AfterViewInit {

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
