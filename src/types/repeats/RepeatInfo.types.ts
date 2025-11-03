import { RepeatType } from './RepeatType.types';

export interface RepeatInfo {
  type: RepeatType;
  interval: number;
  endDate?: string;
  id?: string;
}
