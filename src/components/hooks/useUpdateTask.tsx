import { Task, updateTask } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { FormValues, UpdateTaskProps } from "../utils";
import { toast } from "react-toastify";

export const useUpdateTask = ({
  TaskId,
  onClose,
  selectedDate,
}: UpdateTaskProps) => {
  const dispatch = useDispatch();

  const task = useSelector((state: any) =>
    state.tasks.tasks.find((task: Task) => task.id === TaskId)
  );

  const initialValues: FormValues = {
    title: task ? task.title : "",
    color: task ? task.colors : [],
    date: selectedDate,
  };

  const handleSubmit = (values: FormValues) => {
    const { title, date, color } = values;

    dispatch(
      updateTask({
        id: TaskId,
        title: title,
        date: date,
        colors: color,
      })
    );
    toast.success(`Task updated successfully`);
    onClose();
  };
  return { handleSubmit, initialValues };
};
