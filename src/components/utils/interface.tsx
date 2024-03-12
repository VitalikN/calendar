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
export interface useAddTaskProps {
  onClose: () => void;
}
export interface AddTaskProps {
  onClose: () => void;
  selectedDate: string;
}
export interface HolidayCalendar {
  id: string;
  name: string;
  date: string;
}
export interface HeaderCalendarProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  calendarRef: React.MutableRefObject<HTMLDivElement | null>;
  combinedData: {
    [key: string]: { holidays: HolidayCalendar[]; tasks: TasksDayProps[] };
  };
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  editTaskId?: string | null;
}
export interface useModalProps {
  setEditTaskId: Function;
}

export interface UseTasksDayProps {
  setSelectedDate: (date: string) => void;
  setMenuOpen: (isOpen: boolean) => void;
  setEditTaskId: (taskId: string | null) => void;
}

export interface TasksDayProps {
  filteredTasks: any[];
  isToday: boolean;
  dayData: {
    holidays: HolidayCalendar[];
    tasks: any[];
  };
  day: number;
  dateString: string;
  setSelectedDate: (date: string) => void;
  setMenuOpen: (isOpen: boolean) => void;
  setEditTaskId: (taskId: string | null) => void;
}
