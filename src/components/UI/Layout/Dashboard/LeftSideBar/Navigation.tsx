import { DashboardNavigationLinks } from "../../../assets";
import SideBarLink from "./SideBarLink";

const DashboardNavigation = () => (
  <div className="flex flex-col gap-3">
    {DashboardNavigationLinks.map((icon) => (
      <SideBarLink
        key={icon.iconName}
        iconName={icon.iconName}
        url={icon.url}
        activeIconName={icon.activeIconName}
        label={icon.label}
      />
    ))}
  </div>
);
export default DashboardNavigation;
