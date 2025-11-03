import { Event } from '@/types/events/Event.types';
import { EventForm } from '@/types/events/EventForm.types';
import { convertEventToDateRange } from '@/utils/events/converts/convertToDateRange';

export function isOverlapping(
  event1: Event | EventForm,
  event2: Event | EventForm
) {
  const { start: start1, end: end1 } = convertEventToDateRange(event1);
  const { start: start2, end: end2 } = convertEventToDateRange(event2);

  return start1 < end2 && start2 < end1;
}
