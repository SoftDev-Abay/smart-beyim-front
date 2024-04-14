import React, { useState } from "react";
import { ResponsiveContainer } from "recharts";

import { ICustomRadarChartData } from "../UI/assets/index";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { cn } from "../../utils/utils";
import FilterDate from "../UI/FilterDate";
interface CustomRadarChartProps {
  data: ICustomRadarChartData[];
  colors: string[];
}

interface ICustomRadarChartProps
  extends CustomRadarChartProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const CustomRadarChart: React.FC<ICustomRadarChartProps> = ({
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

      <ResponsiveContainer width="100%" height={247}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
