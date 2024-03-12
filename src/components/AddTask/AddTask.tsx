import { Formik } from "formik";

import { validationSchema, AddTaskProps } from "../utils";
import { useAddTask } from "../hooks";
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
} from "./AddTask.styled";

const AddTask: React.FC<AddTaskProps> = ({ onClose, selectedDate }) => {
  const { handleSubmit } = useAddTask({ onClose });

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
