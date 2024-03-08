import { ErrorMessage, Field, Formik } from "formik";

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
} from "./AddTask.styled";
import { addTask } from "@/redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";

import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  color: Yup.array()
    .min(1, "At least one color must be selected")
    .of(Yup.string().oneOf(["red", "green", "blue"], "Invalid color"))
    .required("Color is required"),
});
interface AddTaskProps {
  onClose: () => void;
  selectedDate: string;
}
export interface ErrorFeedbackProps {
  name: string;
}
interface FormValues {
  title: string;
  date: string;
  color: string[];
}

const AddTask: React.FC<AddTaskProps> = ({ onClose, selectedDate }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: FormValues) => {
    const { title, date, color } = values;
    dispatch(addTask({ id: nanoid(), title, date, colors: color }));
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
      <h2>Add New Task</h2>
      <Formik
        initialValues={{ title: "", color: [], date: selectedDate }}
        validationSchema={validationSchema}
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
                placeholder="New Task"
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
            <Btn type="submit">Create Task</Btn>
          </Form>
        )}
      </Formik>
    </BoxContent>
  );
};

export default AddTask;
