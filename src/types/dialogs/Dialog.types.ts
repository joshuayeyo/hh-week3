// Type definitions for dialog components
// 다이얼로그 컴포넌트 타입 정의

import { Event } from '@/types/events/Event.types';

export interface OverlapDialogProps {
  open: boolean;
  overlappingEvents: Event[];
  onClose: () => void;
  onConfirm: () => void;
}

export interface NotificationStackProps {
  notifications: Array<{
    message: string;
  }>;
  onRemoveNotification: (index: number) => void;
}
