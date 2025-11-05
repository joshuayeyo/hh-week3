export interface CalendarHeaderProps {
  view: 'week' | 'month';
  setView: (view: 'week' | 'month') => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}
