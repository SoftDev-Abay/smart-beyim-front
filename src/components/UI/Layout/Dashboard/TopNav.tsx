import { useEffect, useState } from "react";
import Icon from "../../Icon/Icon";
import { useLocation } from "react-router-dom";

const TopNav = () => {
  const [pageTitle, setPageTitle] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    setPageTitle(() => document.title);
  }, [location.pathname]);

  return (
    <>
      <div className="topbar_nav">
        <h6 className="font-headings text-subHeading3 font-medium">
          {pageTitle}
        </h6>
        <div className="flex gap-5">
          <div className="flex items-center gap-[20px]">
            <Icon
              name="NotificationSvg"
              className="cursor-pointer"
              width="24"
              height="24"
            />
            <div className="flex items-center gap-[20px] rounded-xl border  px-[12px] py-[3px] sm:px-[12px] sm:py-[6px]">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                width="32px"
                height="32px"
                className="cursor-pointer rounded-full "
                alt=""
              />
              <div>
                <p className="my-[1.5px] hidden text-p2 sm:block  ">Arman B.</p>
                <p className="text-label1 text-secondary-500">Student</p>
              </div>
              <Icon
                name="ChevronDownSvg"
                className="mx-[5px] my-[7.5] cursor-pointer"
                width="12"
                height="8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
