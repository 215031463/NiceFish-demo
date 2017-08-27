import { AnimationEntryMetadata } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyInOut: AnimationEntryMetadata = trigger('flyInOut', [
  state('*', style({ opacity: 1, transform: 'translateX(0)' })),
  transition(':enter', [
    animate(300, keyframes([
      style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
      style({ opacity: 1, transform: 'translateX(25)', offset: .3 }),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
    ]))
  ]),
  transition(':leave', [
    animate(300, keyframes([
      style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
      style({ opacity: 1, transform: 'translateX(-25)', offset: .7 }),
      style({ opacity: 1, transform: 'translateX(100%)', offset: 1 })
    ]))
  ])
]);
