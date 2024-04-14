import { ReactNode, forwardRef, ChangeEvent, InputHTMLAttributes } from "react";
import Label from "../Label";
import { cn } from "../../../utils/utils";
import Icon, { IconName } from "../Icon/Icon";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  errorMessage: string | undefined;
  leftIconName: IconName;
  children?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label,
      name,
      type = "text",
      errorMessage,
      children,
      onChange,
      onBlur,
      placeholder,
      leftIconName,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="group">
        {label && <Label name={name} label={label} />}

        <div
          className={cn(
            "flex flex-row items-center rounded-lg border border-[#CFD3D5] bg-[#f8faff] px-4 py-2 focus-within:border-primary-1000 focus-within:text-primary-1000",
            {
              "border-[#F57E77] text-[#F57E77] focus-within:border-[#F57E77] focus-within:text-[#F57E77]":
                errorMessage,
            },
          )}
        >
          <Icon className="mr-4" name={leftIconName} />
          <input
            placeholder={placeholder}
            className={cn(
              "h-9 w-full bg-[#f8faff] font-sans text-p1  focus:outline-none",
            )}
            id={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            ref={ref}
            {...rest}
          />

          {children}
        </div>
        {errorMessage && (
          <p className="mb-4 pt-2 text-left font-sans text-label1 text-[#F57E77]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

export default InputForm;



