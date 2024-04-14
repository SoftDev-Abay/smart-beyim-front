import { useNavigate } from "react-router-dom";

import useSignOut from "react-auth-kit/hooks/useSignOut";

import Icon from "../../../Icon/Icon";

const Action = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  const onSignOut = () => {
    signOut();
    navigate("/auth/sign-in");
  };

  return (
    <div className="flex flex-col gap-[23px]">
      {/* <div className="flex flex-col gap-[14px]">
        <div
          className={`flex cursor-pointer items-center gap-3 rounded-[16px] bg-[#5E63661A] px-[16px] py-[16px] lg:py-[11px]  `}
        >
          <Icon name="HeadphonesSvg" />
          <span className="hidden text-black-500 lg:inline-block">
            Contact Support
          </span>
        </div>
        <div className="flex flex-col gap-[16px] rounded-[16px] bg-[#FFCC9133] px-[16px] py-[16px] lg:px-[20px] lg:pb-[13px] lg:pt-[11px]">
          <div className="flex items-center gap-3">
            <Icon name="GiftSvg" />
            <span className="hidden text-black-500 lg:inline-block">
              Бесплатные призы!
            </span>
          </div>

          <div className="hidden max-w-[160px] cursor-pointer items-center justify-between lg:flex">
            <span className="text-label1 text-black-400">
              Улучшите ваш аккаунт
            </span>

            <Icon name="ArrowRight2Svg" width={16} height={16} />
          </div>
        </div>
      </div> */}
      <div
        onClick={onSignOut}
        className="leftsidebar_link logoutLink  flex cursor-pointer gap-2 p-[16px] text-[#CC5F5F] transition hover:bg-[#CC5F5F] hover:text-white 2xl:p-[11px]"
      >
        <Icon name="LogoutSvg" />
        <span className="hidden 2xl:block">Выйти</span>
      </div>
    </div>
  );
};

export default Action;
