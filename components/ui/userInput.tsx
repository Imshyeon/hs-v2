import { pl } from "date-fns/locale";
import { Field } from "formik";

interface UserInputProps {
  label: string;
  name: string;
  placeholder: string;
  id: string;
  type?: string;
  rows?: boolean;
}
export default function UserInput({
  label,
  name,
  placeholder,
  id,
  type,
  rows,
}: UserInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full items-center">
      <label htmlFor={id} className="w-2/3 text-left">
        {label}
        <span className="text-red-600">*</span>
      </label>

      {rows ? (
        <div className="w-2/3 flex gap-2">
          <Field
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            className="border rounded-xl w-1/2 p-3 focus:outline-none"
          />
          <Field
            name={`${name}_confirm`}
            type={type}
            placeholder={`${placeholder} 확인`}
            className="border rounded-xl w-1/2 p-3 focus:outline-none"
          />
        </div>
      ) : (
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
          className="border rounded-xl p-3 w-2/3 focus:outline-none"
        />
      )}
    </div>
  );
}
