import { RepeatInfo } from '@/types/repeats/RepeatInfo.types';

export interface EventFormProps {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  category: string;
  repeat: RepeatInfo;
  notificationTime: number; // 분 단위로 저장
}

export type EventForm = EventFormProps;
