import { ErrorMessage, Formik } from "formik";

import { Task, addTask, updateTask } from "@/redux/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";

import * as Yup from "yup";
import {
  BoxContent,
  BoxInput,
  Btn,
  ColorIndicator,
  ColorInput,
  ColorOption,
  ErrorAdd,
  Form,
  IconClose,
  Input,
  BoxInputColor,
} from "../AddTask/AddTask.styled";

const validationSchemaUpdate = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  color: Yup.array()
    .min(1, "At least one color must be selected")
    .of(Yup.string().oneOf(["red", "green", "blue"], "Invalid color")),
});
interface AddTaskProps {
  onClose: () => void;
  selectedDate: string;
  TaskId: string;
}
export interface ErrorFeedbackProps {
  name: string;
}
interface FormValues {
  title: string;
  date: string;
  color: string[];
}

const UpdateTask: React.FC<AddTaskProps> = ({
  onClose,
  selectedDate,
  TaskId,
}) => {
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
    onClose();
  };

  const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <ErrorAdd>{errorMessage}</ErrorAdd>}
      </ErrorMessage>
    );
  };

  return (
    <BoxContent>
      <IconClose onClick={onClose} />
      <h2>Update Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaUpdate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <BoxInput>
              <Input type="text" name="date" readOnly value={selectedDate} />
            </BoxInput>
            <BoxInput>
              <Input
                type="text"
                name="title"
                placeholder="Update Task"
                error={touched.title && errors.title}
              />

              <ErrorFeedback name="title" />
            </BoxInput>
            <BoxInputColor>
              <label>Color:</label>
              <ColorOption>
                <ColorInput type="checkbox" name="color" value="red" />
                <ColorIndicator color="#f52222" />
              </ColorOption>
              <ColorOption>
                <ColorInput type="checkbox" name="color" value="green" />
                <ColorIndicator color="#01d101" />
              </ColorOption>
              <ColorOption>
                <ColorInput type="checkbox" name="color" value="blue" />
                <ColorIndicator color="#3471f6" />
              </ColorOption>
              <ErrorFeedback name="color" />
            </BoxInputColor>
            <Btn type="submit">Update Task</Btn>
          </Form>
        )}
      </Formik>
    </BoxContent>
  );
};
export default UpdateTask;
