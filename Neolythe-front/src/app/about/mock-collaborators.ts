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

// TODO : Ajuster les liens et img
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
  {
    picture: './../../assets/img/profile-pictures/sadok-picture.jpg',
    name: 'Sadok',
    description: 'Back-End Web Developer',
    links: [
      {
        name: 'Email',
        icon: 'email',
        url: 'mailto:sadok.benfredj@gmail.com'
      }
    ]
  },
  {
    picture: './../../assets/img/profile-pictures/adem-picture.jpg',
    name: 'Adem',
    description: "Fullstack Web Developer",
    links: [
      {
        name: 'Email',
        icon: 'email',
        url: 'mailto:adem.gurbuz@gmail.com'
      }
    ]
  },
];