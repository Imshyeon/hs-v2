import { Input } from "@nextui-org/react";
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
            as={Input}
            isRequired
            variant="bordered"
            placeholder={placeholder}
            size="lg"
            className="w-1/2 focus:outline-none"
          />
          <Field
            name={`${name}_confirm`}
            type={type}
            as={Input}
            isRequired
            variant="bordered"
            placeholder={`${placeholder} 확인`}
            size="lg"
            className="w-1/2 focus:outline-none"
          />
        </div>
      ) : (
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
          as={Input}
          isRequired
          variant="bordered"
          size="lg"
          className="w-2/3 focus:outline-none"
        />
      )}
    </div>
  );
}
