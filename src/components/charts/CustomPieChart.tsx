import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import FeatherIcon from "feather-icons-react";
import { ICustomPieChartData } from "../UI/assets/index";
import { cn } from "../../utils/utils";
import FilterDate from "../UI/FilterDate";
interface CustomPieChartProps {
  data: ICustomPieChartData[];
  colors: string[];
}

interface ICustomPieChartProps
  extends CustomPieChartProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const CustomPieChart: React.FC<ICustomPieChartProps> = ({
  data,
  colors,
  className,
  ...props
}) => {
  const [dateFrom, setDateFrom] = useState<string>("thisWeek");

  const handleDateChange = (value: string) => {
    setDateFrom(value);
  };

  return (
    <div
      {...props}
      className={cn("rounded-[12px] bg-white px-[20px] py-[21px]", className)}
    >
      <header className="mb-3 flex justify-between">
        <p className="text-p1 font-medium">Marketting</p>
        <FilterDate dateFrom={dateFrom} handleDateChange={handleDateChange} />
      </header>
      <div className="flex items-center justify-between">
        {data.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <p className="text-label2 text-black-200">{item.name}</p>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={247}>
        <PieChart>
          <Pie
            data={[{ value: 100 }]}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={102.5}
            fill="#EEF0FA" // Background color of the ring
            paddingAngle={0}
            dataKey="value"
            stroke={"f0f0f0"} // used to hide gap between cells
            tooltipType="none"
          />
          <Pie
            data={data} // This can be an empty array if you just want a ring without any data
            cx="50%"
            cy="50%"
            innerRadius={70} // Increase the inner radius for a larger ring
            outerRadius={86} // Increase the outer radius for a larger ring
            fill="transparent" // Make the ring transparent to see through it
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                stroke={colors[index % colors.length]} // used to hide gap between cells
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
