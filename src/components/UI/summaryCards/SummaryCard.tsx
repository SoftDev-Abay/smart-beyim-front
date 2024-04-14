import React from "react";
import Icon from "../Icon/Icon";
import FeatherIcon from "feather-icons-react";
import { numberWithSpaces } from "../../../utils/utils";
import { ISummaryCard } from "../assets";
import { cn } from "../../../utils/utils";
import FilterDate from "../FilterDate";

interface ISummaryCardProps
  extends ISummaryCard,
    React.HTMLAttributes<HTMLDivElement> {
  onDateChange: (value: string) => void;
  dateFrom: string;
}

const SummaryCard: React.FC<ISummaryCardProps> = ({
  iconName,
  data,
  highlight,
  className,
  onDateChange,
  dateFrom,
  ...props
}) => {
  // Conditional class application
  const containerClasses = `flex min-h-[145px] flex-col justify-between rounded-[12px] ${
    highlight ? "bg-primary-1000" : "bg-white"
  } px-[25px] py-[12px]`;

  // Conditional text color class
  const textColorClass = highlight ? "text-white" : "";
  const labelColorClass = highlight ? "text-white" : "text-black-300";
  const percentageColorClass = highlight ? "text-primary-100" : "text-go";

  return (
    <div {...props} className={cn(containerClasses, className)}>
      <header
        className={`mb-[21px] flex items-center justify-between ${textColorClass} `}
      >
        <div
          className={`rounded-[16px] ${highlight ? "bg-white" : "bg-[#FFCC9133]"} p-[8px]`}
        >
          <Icon name={iconName} width={20} height={20} />
        </div>

        <FilterDate dateFrom={dateFrom} handleDateChange={onDateChange} />
      </header>
      <div className={`flex justify-between ${textColorClass}`}>
        {data.map((item, index) => (
          <div key={index} className="min-w-[110.67px]">
            <p className={`mb-2 text-p1 font-medium ${labelColorClass}`}>
              {item.label}
            </p>
            <div className="flex items-center gap-[7.5px]">
              <p className="text-subHeading2 font-medium">{item.value ? item.value : 0 }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
