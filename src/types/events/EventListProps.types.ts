// Event list component props type definitions
// 이벤트 목록 컴포넌트 props 타입 정의

import { Event } from './Event.types';

export interface EventListProps {
  filteredEvents: Event[];
  notifiedEvents: string[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onEditEvent: (event: Event) => void;
  onDeleteEvent: (event: Event) => void;
}
