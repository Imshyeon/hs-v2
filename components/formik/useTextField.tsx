import { Field, useField } from "formik";

interface MyTextFieldProps {
  name: string; // name 속성을 추가
  as: any;
  placeholder: string;
  className: string;
  size: any;
}

export default function MyTextField({ ...props }: MyTextFieldProps) {
  const [field, meta] = useField(props);
  return (
    <>
      <Field {...field} {...props} isRequired type="text" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
