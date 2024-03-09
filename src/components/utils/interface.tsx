export interface UpdateTaskProps {
  onClose: () => void;
  selectedDate: string;
  TaskId: string;
}
export interface ErrorFeedbackProps {
  name: string;
}
export interface FormValues {
  title: string;
  date: string;
  color: string[];
}

export interface AddTaskProps {
  onClose: () => void;
  selectedDate: string;
}
// Calendar
export interface HolidayCalendar {
  id: string;
  name: string;
  date: string;
}
export interface HeaderCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  saveImage: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  editTaskId?: string | null;
}
