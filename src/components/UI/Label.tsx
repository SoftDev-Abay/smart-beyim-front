import { FC, HTMLAttributes } from "react";
import { cn } from "../../utils/utils";

interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  name: string;
  label: string;
}

const Label: FC<ILabelProps> = ({ className, name, label, ...props }) => (
  <label
    {...props}
    className={cn(
      "block pb-2 text-left text-label1  text-[#ABAFB1] group-focus-within:text-primary-1000",
      className,
    )}
    htmlFor={name}
  >
    {label}
  </label>
);

export default Label;
