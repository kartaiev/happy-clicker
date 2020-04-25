import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Animations = {
  Enter: trigger('Enter', [
    state('appear', style({opacity: 1, transform: 'scale(1)'})),
    transition(':enter', [
      style({opacity: 0, transform: 'scale(0)'}),
      animate('0.5s 1s ease-in'),
    ]),
  ]),
  ShortEnter: trigger('ShortEnter', [
    state('appear', style({ opacity: 1, transform: 'scale(1)' })),
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0)' }),
      animate('.1s ease-in'),
    ]),
  ]),
};
