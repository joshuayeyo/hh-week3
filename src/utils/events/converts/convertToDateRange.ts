import { parseDateTime } from './parseDateTime';

import { Event } from '@/types/events/Event.types';
import { EventForm } from '@/types/events/EventForm.types';

export function convertEventToDateRange({
  date,
  startTime,
  endTime,
}: Event | EventForm) {
  return {
    start: parseDateTime(date, startTime),
    end: parseDateTime(date, endTime),
  };
}
