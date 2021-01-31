import { Component, Input, OnInit } from '@angular/core';
import { PROJECT_COLLABORATORS } from './../mock-collaborators';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {

  @Input() isSmallDevice: boolean;

  public projectCollaborators = PROJECT_COLLABORATORS;

  constructor() { }

  ngOnInit(): void {
  }

}
