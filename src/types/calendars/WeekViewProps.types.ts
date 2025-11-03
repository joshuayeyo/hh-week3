import { Event } from '@/types/events/Event.types';

export interface WeekViewProps {
  currentDate: Date;
  filteredEvents: Event[];
  notifiedEvents: string[];
}
