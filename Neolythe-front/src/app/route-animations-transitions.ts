import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

export const routeTransitionAnimations = trigger('sideBarChoice', [
    transition('Dashboard => About', [
        style({ position: 'relative' }),
        query(':leave', [
        style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%'
            })
        ]),
        query(':enter', [
            style({
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '100vh'
            })
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('500ms ease-in-out', style({ transform: 'translateX(200vh)' }))
            ]),
            query(':enter', [
                animate('1000ms ease-in-out', style({ top: '0%',  }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('About => Dashboard', [
        style({ position: 'relative' }),
        query(':leave', [
        style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%'
            })
        ]),
        query(':enter', [
            style({ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '100vh' 
            })
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('500ms ease-in-out', style({ transform: 'translateX(200vh)' }))
            ]),
            query(':enter', [
                animate('1000ms ease-in-out', style({ top: '0%' }))
            ])
        ]),
        query(':enter', animateChild()),
    ])
]);