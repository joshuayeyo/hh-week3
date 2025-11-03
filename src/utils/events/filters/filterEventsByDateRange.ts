import { Event } from '@/types/events/Event.types';
import { isDateInRange } from '@/utils/dateUtils';

export default function filterEventsByDateRange(
  events: Event[],
  start: Date,
  end: Date
): Event[] {
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return isDateInRange(eventDate, start, end);
  });
}
