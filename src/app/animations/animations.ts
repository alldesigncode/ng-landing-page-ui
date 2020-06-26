import {
  trigger,
  style,
  state,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const revealDetailPageAnimation = trigger('revealPage', [
  state(
    'active',
    style({
      transform: 'translateY(0)',
      opacity: 1,
      visibility: 'visible',
    })
  ),
  state(
    'default',
    style({
      transform: 'translateY(-10px)',
      opacity: 0,
      visibility: 'hidden',
    })
  ),
  transition('active => default', [animate('0.2s 0.4s ease-out')]),
  transition('default => active', [animate('0.3s 1s ease-out')]),
]);

