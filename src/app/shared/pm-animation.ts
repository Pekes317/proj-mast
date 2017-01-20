import { trigger, state, style, transition, animate } from '@angular/core';

export const pmSlideUpDown = trigger('slideUpDown', [
	state('in', style({ transform: 'translateY(0)' })),
	state('out', style({ transform: 'translateY(-100vh)' })),
	transition('in => out', animate('1s ease')),
	transition('out => in', animate('1s ease'))
]);