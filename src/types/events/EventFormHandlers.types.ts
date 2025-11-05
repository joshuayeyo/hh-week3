import { ChangeEvent } from 'react';

export interface BasicFieldsFormHandlers {
  setTitle: (value: string) => void;
  setDate: (value: string) => void;
  handleStartTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEndTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface DetailFieldsPropsHandlers {
  setDescription: (value: string) => void;
  setLocation: (value: string) => void;
  setCategory: (value: string) => void;
}

export interface SettingFieldsFormHandlers {
  setIsRepeating: (value: boolean) => void;
  setNotificationTime: (value: number) => void;
}

export interface FormActionsHandlers {
  onSubmit: () => void;
  isEditing: boolean;
}

export interface EventFormHandlers
  extends BasicFieldsFormHandlers,
    DetailFieldsPropsHandlers,
    SettingFieldsFormHandlers,
    FormActionsHandlers {
  isRepeating: boolean;
  editingEvent: boolean;
}
