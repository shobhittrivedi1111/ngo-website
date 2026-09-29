import { Component } from '@angular/core';
import { EVENTS } from '../../core/ngo.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.html',
})
export class Events {
  events = EVENTS;

  isPast(dateStr: string) {
    return new Date(dateStr) < new Date();
  }
}