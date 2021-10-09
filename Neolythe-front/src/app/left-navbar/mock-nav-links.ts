import { NavLinks } from "./left-navbar.model";

export const NAVIGATION_LINKS: NavLinks[] = [
    {
        routerLinkActive: true,
        routerLink: '/dashboard',
        iconName: 'dashboard',
        linkName: 'Dashboard'
    },
    {
        routerLinkActive: false,
        routerLink: '#',
        iconName: 'pie_chart',
        linkName: 'Charts'
    },
    {
        routerLinkActive: false,
        routerLink: '#',
        iconName: 'attach_money',
        linkName: 'Crypto'
    },
    {
        routerLinkActive: false,
        routerLink: '#',
        iconName: 'folder',
        linkName: 'Projects'
    },
    {
        routerLinkActive: true,
        routerLink: '/about',
        iconName: 'info',
        linkName: 'About'
    }
]