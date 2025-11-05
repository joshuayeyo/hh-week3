import filterEventsByDateRange from './filterEventsByDateRange';

import { Event } from '@/types/events/Event.types';

export default function filterEventsByDateRangeAtMonth(
  events: Event[],
  currentDate: Date
) {
  const monthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const monthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );
  return filterEventsByDateRange(events, monthStart, monthEnd);
}
