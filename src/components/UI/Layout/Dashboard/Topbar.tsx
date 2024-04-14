import Breadcrumbs from "./BreadCrumb/Breadcrumbs";
import TopNav from "./TopNav";
const Topbar = () => {
  return (
    <div className="topbar">
      <TopNav />
      <Breadcrumbs />
    </div>
  );
};

export default Topbar;
