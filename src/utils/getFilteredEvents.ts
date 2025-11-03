import filterEventsByDateRangeAtMonth from './events/filters/filterEventsByDateRangeAtMonth';
import filterEventsByDateRangeAtWeek from './events/filters/filterEventsByDateRangeAtWeek';
import searchEvents from './events/searches/searchEvents';

import { Event } from '@/types/events/Event.types';

export function getFilteredEvents(
  events: Event[],
  searchTerm: string,
  currentDate: Date,
  view: 'week' | 'month'
): Event[] {
  const searchedEvents = searchEvents(events, searchTerm);

  if (view === 'week') {
    return filterEventsByDateRangeAtWeek(searchedEvents, currentDate);
  }

  if (view === 'month') {
    return filterEventsByDateRangeAtMonth(searchedEvents, currentDate);
  }

  return searchedEvents;
}
