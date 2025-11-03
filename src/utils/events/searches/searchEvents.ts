import containsTerm from './containsTerm';

import { Event } from '@/types/events/Event.types';

export default function searchEvents(events: Event[], term: string) {
  return events.filter(
    ({ title, description, location }) =>
      containsTerm(title, term) ||
      containsTerm(description, term) ||
      containsTerm(location, term)
  );
}
