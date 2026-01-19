export interface Collaborator {
  picture: string;
  name: string;
  description: string;
  links: SocialLink[];
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export const PROJECT_COLLABORATORS: Collaborator[] = [
  {
    picture: './../../assets/img/profile-pictures/nicolas-picture.jpg',
    name: 'Nicolas',
    description: 'FullStack Web Developer',
    links: [
      {
        name: 'Email',
        icon: 'email',
        url: 'mailto:nicolas.gauss.1@orange.fr'
      },
      {
        name: 'Github',
        icon: './../../assets/img/icons/github.svg',
        url: 'https://github.com/nicolere'
      }
    ]
  },
];