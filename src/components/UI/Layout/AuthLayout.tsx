import { Outlet } from "react-router-dom";

import Icon from "../Icon/Icon";

const AuthLayout = () => {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <nav className="px-[34px]  py-3 md:px-28 ">
        <div className="mx-auto max-w-screen-2xl">
          <Icon name="LogoSvg" />
        </div>
      </nav>
      <main className="flex-grow bg-primary-100 ">
        <div className="my-24    px-[14px] ">
          <div className="mx-auto max-w-[443px] rounded-xl bg-[#fff] px-[20px]  py-[44px] sm:px-[34px] ">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
