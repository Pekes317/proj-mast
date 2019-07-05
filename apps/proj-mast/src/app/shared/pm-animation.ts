import { animate, group, state, style, transition, trigger, query } from '@angular/animations';

export const pmGrowInOut = trigger('growInOut', [
  state('*', style({ opacity: 1, transform: 'none' })),
  state('void', style({ opacity: 0, transform: 'none' })),
  transition('* <=> *', [animate('2s ease-in-out')])
]);

export const pmSlideNav = trigger('slideNav', [
  transition('* <=> *', [
    group([
      query(
        ':leave',
        [
          style({ position: 'absolute', transform: 'translateY(0)' }),
          animate('1s ease-in-out', style({ transform: 'translateY(-200vh)' }))
        ],
        { optional: true }
      ),
      query(':enter', [
        style({ position: 'absolute', transform: 'translateY(200vh)' }),
        animate('1s ease-in-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ])
]);

export const pmFadeInOut = trigger('fadeInOut', [
  transition('* <=> *', [style({ opacity: 0 }), animate('1s ease-in-out', style({ opacity: 1 }))])
]);
