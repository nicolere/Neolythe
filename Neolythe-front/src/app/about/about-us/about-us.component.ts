import { Component, OnInit } from '@angular/core';
import { PROJECT_COLLABORATORS, Collaborator } from './../mock-collaborators';
import { PERSONAL_SOCIAL_LINKS } from './../mock-links';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public personalSocialLinks = PERSONAL_SOCIAL_LINKS;
  public projectCollaborators = PROJECT_COLLABORATORS;

  public activeCollaborator: Collaborator;

  constructor() { }

  ngOnInit(): void {

    this.activeCollaborator = this.projectCollaborators[2];

  }

  public toggleCollaborator(name: string): void {
    this.activeCollaborator = this.projectCollaborators.find((collaborator: Collaborator) => collaborator.name === name)
  }
}
