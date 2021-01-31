import { Component, Input, OnInit } from '@angular/core';
import { NEOLYTHE_ABOUT_PROJECT } from './../mock-about-project';
import { PROJECT_COLLABORATORS } from './../mock-collaborators';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {

  @Input() isSmallDevice: boolean;

  public neolytheAboutProject = NEOLYTHE_ABOUT_PROJECT;
  public projectCollaborators = PROJECT_COLLABORATORS;

  constructor() { }

  ngOnInit(): void {
  }

}
