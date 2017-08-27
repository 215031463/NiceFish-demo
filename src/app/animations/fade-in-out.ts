import { AnimationEntryMetadata } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

export const fadeInOut: AnimationEntryMetadata = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(600, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(600, style({ opacity: 0 }))
  ])
]);
