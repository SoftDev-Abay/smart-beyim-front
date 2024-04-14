import { useLocation, Link } from "react-router-dom";

import Crumb from "./Crumb";
import Icon from "../../../Icon/Icon";

const Breadcrumbs = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  let url = "";
  const crumArray = locationPath // for testing - "/orders/view-order"
    .split("/") // split the string into an array
    .slice(1) // remove the first element (empty string)
    .map((crumb) => {
      url += `/${crumb}`; // concatenate url
      crumb = crumb.replace(/-/g, " "); // replace - with space
      return {
        url,
        name: crumb,
      };
    });

  return (
    <div className="topbar_breadcrumbs">
      <Link to="/dashboard">
        <Icon name="HomeSvg" width={16} height={16} />
      </Link>
      {crumArray.map(({ url, name }, index) => {
        if (name === "") return null; // if name is empty string, return null

        return (
          <Crumb
            key={index}
            url={url}
            name={name}
            active={index === crumArray.length - 1}
          />
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
