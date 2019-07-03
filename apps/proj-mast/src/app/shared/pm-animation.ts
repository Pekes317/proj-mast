import { animate, state, style, transition, trigger } from '@angular/core';

export const pmGrowInOut = trigger('growInOut', [
	state('*', style({ opacity: 1, transform: 'none' })),
	state('void', style({ opacity: 0, transform: 'none'  })),
	transition('* => *', [
		animate('2s ease-in-out')
	])
]);

export const pmSlideNav = trigger('slideNav', [
	state('void', style({ position: 'absolute', width: '90%' })),
	state('*', style({ position: 'absolute', width: '90%' })),
	transition(':enter', [
		style({ transform: 'translateY(2000px)' }),
		animate('1s ease-in-out', style({ transform: 'translateY(0)' }))
	]),
	transition(':leave', [
		style({ transform: 'translateY(0)' }),
		animate('1s ease-in-out', style({ transform: 'translateY(-2000px)' }))
	])
]);

export const pmFadeInOut = trigger('fadeInOut', [
	state('*', style({ opacity: 1 })),
	state('false', style({ opacity: 0 })),
	transition('* => *', [
		style({ opacity: 0 }),
		animate('1s ease-in-out', style({ opacity: 1 }))
	])
]);