import { SVGProps, FC } from "react";
import { cn } from "../../../utils/utils";

import LogoSvg from "./assets/logo.svg?react";
import LockSvg from "./assets/lock.svg?react";
import LetterSvg from "./assets/letter.svg?react";
import ClosedEyeSvg from "./assets/closed-eye.svg?react";
import UserSvg from "./assets/user.svg?react";

import ChevronDownSvg from "./assets/chevron-down.svg?react";
import NotificationSvg from "./assets/notification.svg?react";
import HomeSvg from "./assets/home.svg?react";
import TwoUserSvg from "./assets/two-user.svg?react";
import TwoUserActiveSvg from "./assets/two-user-active.svg?react";
import BagSvg from "./assets/bag.svg?react";
import BagActiveSvg from "./assets/bag-active.svg?react";
import FolderSvg from "./assets/folder.svg?react";
import FolderActiveSvg from "./assets/folder-active.svg?react";
import SettingSvg from "./assets/setting.svg?react";
import SettingActiveSvg from "./assets/setting-active.svg?react";
import LogoutSvg from "./assets/logout.svg?react";
import CategorySvg from "./assets/category.svg?react";
import CategoryActiveSvg from "./assets/category-active.svg?react";
import HeadphonesSvg from "./assets/headphones.svg?react";
import GiftSvg from "./assets/gift.svg?react";
import ArrowRight2Svg from "./assets/arrow-right-2.svg?react";
import DollarSignSvg from "./assets/dollar-sign.svg?react";
import DollarSignActiveSvg from "./assets/dollar-sign-active.svg?react";

// !import иконки сюда с ?react чтобы можно было использовать в Icon компоненте, при наведений на name курсором дает подсказки(например, <Icon name="" />
export const icons = {
  LogoSvg,
  LockSvg,
  LetterSvg,
  ClosedEyeSvg,
  UserSvg,
  ChevronDownSvg,
  NotificationSvg,
  HomeSvg,
  TwoUserSvg,
  BagSvg,
  SettingSvg,
  LogoutSvg,
  CategorySvg,
  HeadphonesSvg,
  GiftSvg,
  ArrowRight2Svg,
  DollarSignSvg,
  DollarSignActiveSvg,
  CategoryActiveSvg,
  SettingActiveSvg,
  FolderActiveSvg,
  BagActiveSvg,
  TwoUserActiveSvg,
  FolderSvg,
};

export type IconName = keyof typeof icons;

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon: FC<IIconProps> = ({ name, className, ...props }) => {
  const SelectedIcon = icons[name];

  return <SelectedIcon className={cn(className)} {...props} />;
};

export default Icon;
