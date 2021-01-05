interface SocialLink {
    name: string;
    url: string;
    iconPath: string;
}

export const PERSONAL_SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nicolas-gau/',
        iconPath: './../../assets/img/icons/linkedin.svg'
    },
    {
        name: 'Github',
        url: 'https://github.com/nicolere',
        iconPath: './../../assets/img/icons/github.svg'
    },
    {
        name: 'Mail',
        url: 'mailto:nicolas.gaun@gmail.com',
        iconPath: './../../assets/img/icons/email.svg'
    }
]