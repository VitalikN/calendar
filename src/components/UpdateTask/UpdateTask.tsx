import { Formik } from "formik";

import { Task, updateTask } from "@/redux/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

import { validationSchemaUpdate, FormValues, UpdateTaskProps } from "../utils";
import ErrorFeedback from "../ErrorFeedback/ErrorFeedback";

import {
  BoxContent,
  BoxInput,
  Btn,
  ColorIndicator,
  ColorInput,
  ColorOption,
  Form,
  IconClose,
  Input,
  BoxInputColor,
} from "../AddTask/AddTask.styled";

const UpdateTask: React.FC<UpdateTaskProps> = ({
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
