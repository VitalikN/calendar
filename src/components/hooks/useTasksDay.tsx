import { deleteTask } from "@/redux";
import { useDispatch } from "react-redux";
import { UseTasksDayProps } from "../utils";

export const useTasksDay = ({
  setSelectedDate,
  setMenuOpen,
  setEditTaskId,
}: UseTasksDayProps) => {
  const dispatch = useDispatch();

  const handleBoxDayClick = (dateString: string, isTask: boolean) => {
    setSelectedDate(dateString);
    if (!isTask) {
      setMenuOpen(true);
    }
  };

  const handleTaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleUpdateTaskClick = (dateString: string, taskId: string) => {
    setSelectedDate(dateString);
    setEditTaskId(taskId);
    setMenuOpen(true);
  };

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask({ id: taskId }));
  };

  return {
    handleUpdateTaskClick,
    handleDelete,
    handleTaskClick,
    handleBoxDayClick,
  };
};
