import { ReactNode } from "react";
import Icon from "../UI/Icon/Icon";

const FormHeader = ({ children }: { children: ReactNode }) => {
  return (
    <header className="mx-auto mb-[60px] flex w-fit flex-col items-center ">
      <Icon className="mb-[35px]" name="LogoSvg" />
      {children}
    </header>
  );
};

export default FormHeader;
