import { useState, FC, AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import { IDashboardNavigationLinks } from "../../../assets";
import Icon from "../../../Icon/Icon";

interface ISideBarLinkProps
  extends IDashboardNavigationLinks,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

const SideBarLink: FC<ISideBarLinkProps> = ({
  iconName,
  activeIconName,
  label,
  url,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const onHover = () => setIsHovered(() => true);
  const onUnhover = () => setIsHovered(() => false);
  return (
    <NavLink
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
      {...props}
      to={url}
      end
      className={({ isActive }) =>
        `leftsidebar_link  ${isActive ? "bg-primary-1000 text-white" : "text-black-500"}`
      }
    >
      {({ isActive }) => (
        <>
          <Icon name={`${isActive || isHovered ? activeIconName : iconName}`} />
          <span className={`hidden 2xl:inline-block`}>{label}</span>
        </>
      )}
    </NavLink>
  );
};

export default SideBarLink;
