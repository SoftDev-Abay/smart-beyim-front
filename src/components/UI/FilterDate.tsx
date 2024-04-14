import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { cn } from "../../utils/utils";
interface IFilterDate extends React.HTMLAttributes<HTMLDivElement> {
  handleDateChange: (value: string) => void;
  dateFrom: string;
}

const FilterDate: React.FC<IFilterDate> = ({ dateFrom, handleDateChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { label: "This week", value: "thisWeek" },
    { label: "This month", value: "thisMonth" },
    { label: "This year", value: "thisYear" },
    { label: "Last week", value: "lastWeek" },
    { label: "Last month", value: "lastMonth" },
    { label: "Last year", value: "lastYear" },
  ];

  return (
    <div className="relative">
      <div
        className={`flex cursor-pointer items-center gap-[7px] text-black-100 `}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onBlur={() => setIsDropdownOpen(false)}
      >
        <p className="text-label1 text-black-400">
          {options.find((option) => option.value === dateFrom)?.label}
        </p>
        <FeatherIcon
          icon="chevron-down"
          className="text-label1 text-black-400"
          size={16}
        />
      </div>
      {/*  dropdown  */}
      {isDropdownOpen && (
        <div className="absolute right-0 top-[120%] z-10 flex flex-col rounded-md   bg-white  py-3 shadow-2xl">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                handleDateChange(option.value);
                setIsDropdownOpen(false);
              }}
              className={cn(
                `flex w-[130px] cursor-pointer items-center gap-[7px] px-5 py-[6px] text-black-400   hover:bg-primary-700 hover:text-white ${option.value === dateFrom && "bg-primary-700 text-white"}`,
              )}
            >
              <p className="text-label1">{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDate;
