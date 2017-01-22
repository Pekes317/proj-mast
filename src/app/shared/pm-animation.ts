import { trigger, state, style, transition, animate } from '@angular/core';

export const pmSlideUpDown = trigger('slideUpDown', [
	state('in', style({ transform: 'translateY(0)' })),
	state('out', style({ transform: 'translateY(-100vh)' })),
	transition('in => out', animate('1s ease')),
	transition('out => in', animate('1s ease'))
]);

export const pmSlideNav = trigger('slideNav', [
	state('void', style({ position: 'fixed' })),
	state('*', style({ position: 'fixed' })),
	transition(':enter', [
		style({ transform: 'translateY(100vh)' }),
		animate('1s ease-in-out', style({ transform: 'translateY(0)' }))
	]),
	transition(':leave', [
		style({ transform: 'translateY(0)' }),
		animate('1s ease-in-out', style({ transform: 'translateY(-100vh)' }))
	])
])