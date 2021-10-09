export interface Collaborator {
    picture: string;
    name: string;
    description: string;
    links: SocialLink[];
}

export interface SocialLink {
    name: string;
    icon: string;
    url: string;
}

export interface PersonalSocialLink {
    name: string;
    url: string;
    iconPath: string;
}

export interface ProjectData {
    icon: string;
    title: string;
    total: number;
    state: boolean; //State true = positive evolution, State false = negative evolution
    evolution: number;
    delay: number;
}