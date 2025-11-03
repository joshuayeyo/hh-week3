import { isOverlapping } from './isOverlapping';

import { Event } from '@/types/events/Event.types';
import { EventForm } from '@/types/events/EventForm.types';

export function findOverlappingEvents(
  newEvent: Event | EventForm,
  events: Event[]
) {
  return events.filter(
    (event) =>
      event.id !== (newEvent as Event)?.id && isOverlapping(event, newEvent)
  );
}
