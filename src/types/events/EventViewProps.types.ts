// Event view components props type definitions
// 이벤트 뷰 컴포넌트 props 타입 정의

import { Event } from './Event.types';

export interface WeekViewProps {
  currentDate: Date;
  filteredEvents: Event[];
  notifiedEvents: string[];
}

export interface MonthViewProps {
  currentDate: Date;
  filteredEvents: Event[];
  notifiedEvents: string[];
  holidays: Record<string, string>;
}
