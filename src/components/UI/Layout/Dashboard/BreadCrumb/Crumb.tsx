import { Link } from "react-router-dom";
import { cn } from "../../../../../utils/utils";
const Crumb = ({
  name,
  url,
  active,
}: {
  name: string;
  url: string;
  active: boolean;
}) => {
  let upName = name.slice(0, 1).toUpperCase() + name.slice(1);
  const translations: { [key: string]: string } = {
    Dashboard: "Home",
    "Results table": "Results table",
    Consultancy: "Consultancy",
  };

  if (Object.hasOwnProperty.call(translations, upName))
    upName = translations[upName];

  return (
    <div className="flex gap-[11px] text-label1 text-black-300 transition  hover:text-primary-1000">
      /
      <Link to={url} className={cn({ "text-primary-1000": active })}>
        {upName}
      </Link>
    </div>
  );
};

export default Crumb;
