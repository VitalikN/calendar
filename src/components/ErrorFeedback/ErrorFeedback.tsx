import { ErrorMessage } from "formik";
import { ErrorAdd } from "../AddTask/AddTask.styled";
import { ErrorFeedbackProps } from "../utils";

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errorMessage) => <ErrorAdd>{errorMessage}</ErrorAdd>}
    </ErrorMessage>
  );
};
export default ErrorFeedback;
