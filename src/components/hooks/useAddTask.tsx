import { useDispatch } from "react-redux";
import { FormValues, useAddTaskProps } from "../utils";
import { nanoid } from "nanoid";
import { addTask } from "@/redux";
import { toast } from "react-toastify";

export const useAddTask = ({ onClose }: useAddTaskProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: FormValues) => {
    const { title, date, color } = values;
    dispatch(addTask({ id: nanoid(), title, date, colors: color }));
    toast.success(`New task successfully added`);
    onClose();
  };
  return { handleSubmit };
};
