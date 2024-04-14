import { ReactNode, FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/utils";

interface ITagProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  children: ReactNode;
}

const tagVariants = cva("rounded-lg px-[15px] py-[2px] text-label1", {
  variants: {
    status: {
      pending: "bg-[#F57E771F] text-stop ",
      completed: "bg-[#32936F1F] text-go",
    },
    defaultVariants: {
      variant: "pending",
    },
  },
});

const Tag: FC<ITagProps> = ({ status, children, className, ...props }) => {
  return (
    <div {...props} className={cn(tagVariants({ status }), className)}>
      {children}
    </div>
  );
};

export default Tag;
