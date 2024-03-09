import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  color: Yup.array()
    .min(1, "At least one color must be selected")
    .of(Yup.string().oneOf(["red", "green", "blue"], "Invalid color"))
    .required("Color is required"),
});

export const validationSchemaUpdate = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  color: Yup.array()
    .min(1, "At least one color must be selected")
    .of(Yup.string().oneOf(["red", "green", "blue"], "Invalid color")),
});
