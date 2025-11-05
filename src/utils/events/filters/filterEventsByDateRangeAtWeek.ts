import filterEventsByDateRange from './filterEventsByDateRange';

import { Event } from '@/types/events/Event.types';
import { getWeekDates } from '@/utils/dateUtils';

export default function filterEventsByDateRangeAtWeek(
  events: Event[],
  currentDate: Date
) {
  const weekDates = getWeekDates(currentDate);
  return filterEventsByDateRange(events, weekDates[0], weekDates[6]);
}
