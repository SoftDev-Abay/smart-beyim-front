import { Link } from "react-router-dom";
import { buttonVariants } from "../../components/UI/Button";
import { cn } from "../../utils/utils";

const NotAuthorized = () => {
  return (
    <div className="mx-auto  h-screen w-1/2   pt-[400px]">
      <div className="flex flex-col items-center gap-5  text-center">
        <h1 className="text-subHeading1">Ошибка 401, не авторизован</h1>
        <Link className={cn(buttonVariants(), "mx-auto")} to="/auth/sign-in">
          Логин
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
