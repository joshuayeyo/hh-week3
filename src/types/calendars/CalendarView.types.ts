// Type definitions for calendar view components
// 캘린더 뷰 컴포넌트 타입 정의

import { Event } from '@/types/events/Event.types';

export interface EventListProps {
  filteredEvents: Event[];
  notifiedEvents: string[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onEditEvent: (event: Event) => void;
  onDeleteEvent: (event: Event) => void;
}
