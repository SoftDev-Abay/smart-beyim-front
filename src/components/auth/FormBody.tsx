import { ReactNode, FC, FormEventHandler } from "react";

import { Button } from "../UI/Button";
interface IFormBodyProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isDirty: boolean;
  isSubmitting: boolean;
  buttonText: string;
}
const FormBody: FC<IFormBodyProps> = ({
  children,
  onSubmit,
  isDirty,
  isSubmitting,
  buttonText,
}) => (
  <form
    onSubmit={onSubmit}
    className="flex flex-col justify-center text-center"
  >
    {children}

    <Button
      className="mx-auto"
      state={!isDirty || isSubmitting ? "disabled" : "default"}
      type="submit"
      disabled={!isDirty || isSubmitting}
    >
      {buttonText}
    </Button>
  </form>
);
export default FormBody;
