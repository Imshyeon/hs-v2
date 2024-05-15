import { Field, useField } from "formik";
import SimpleValidationIcon from "../ui/simpleValidationIcon";

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
    <div className={props.className}>
      <div className="flex items-center gap-1">
        <Field {...field} {...props} className="w-full" type="text" />
      </div>
      {meta.touched && meta.error ? (
        <p className="error text-xs text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
}
