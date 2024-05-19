import { Input } from "@nextui-org/react";
import { Field, useField } from "formik";
import { useState } from "react";
import { EyeFilledIcon } from "./icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icon/EyeSlashIcon";

interface UserInputProps {
  label: string;
  name: string;
  placeholder: string;
  id: string;
  type?: string;
  rows?: boolean;
}
export default function UserInput({ ...props }: UserInputProps) {
  const [field, meta] = useField(props);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col gap-1 w-full items-center">
      {props.rows ? (
        <>
          <label htmlFor={props.id} className="w-full text-left relative">
            {props.label}
            <span className="text-red-600">*</span>
            {meta.touched && meta.error && (
              <span className="text-xs text-red-500 absolute right-2 top-1">
                {meta.error}
              </span>
            )}
          </label>
          <div className="w-full flex gap-2">
            <Field
              name={props.name}
              type={isVisible ? "text" : props.type}
              id={props.id}
              as={Input}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              isRequired
              variant="bordered"
              placeholder={props.placeholder}
              size="lg"
              className="w-full focus:outline-none"
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor={props.id} className="w-2/3 text-left relative">
            {props.label}
            <span className="text-red-600">*</span>
            {meta.touched && meta.error && (
              <span className="text-xs text-red-500 absolute right-2 top-1">
                {meta.error}
              </span>
            )}
          </label>
          <Field
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            as={Input}
            isRequired
            variant="bordered"
            size="lg"
            className="w-2/3 focus:outline-none"
          />
        </>
      )}
    </div>
  );
}
