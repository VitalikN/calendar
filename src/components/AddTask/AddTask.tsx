import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoClose } from "react-icons/io5";

import * as Yup from "yup";
import { BoxContent, IconClose } from "./AddTask.styled";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  color: Yup.string().required("Color is required"),
});
interface AddTaskProps {
  onClose: () => void;
  selectedDate: string;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose, selectedDate }) => {
  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <BoxContent>
      <IconClose onClick={onClose} />

      <h2>Add New Task</h2>
      <h3>{selectedDate}</h3>

      <Formik
        initialValues={{ title: "", color: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Title:</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div>
            <label>Color:</label>
            <Field as="select" name="color">
              <option value="">Select color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <ErrorMessage name="color" component="div" className="error" />
          </div>
          <button type="submit">Create Task</button>
        </Form>
      </Formik>
    </BoxContent>
  );
};

export default AddTask;
