import { Field, useField, FormikErrors } from "formik";
import { format } from "date-fns";
import { parseDate } from "@internationalized/date";
import { NewSchedule } from "@/util/interfaces";
import { FunctionComponent } from "react";

interface MyTextFieldProps {
  name: string; // name 속성을 추가
  as: any;
  placeholder: string;
  className: string;
  size: any;
}

interface MyDatePickerProps {
  name: any; // name 속성을 추가
  as: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<NewSchedule>> | Promise<void>;
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

// const MyTextField = ({ ...props }: MyTextFieldProps) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <Field {...field} {...props} isRequired type="text" />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// export default MyTextField;
