import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import FeatherIcon from "feather-icons-react";
import { cn, getDateRange } from "../../utils/utils";
import FilterDate from "../UI/FilterDate";
import { IeltsTest } from "../../types/ieltstests";

interface CustomBarChartProps {
  tests: IeltsTest[];
}

interface ICustomBarChartProps
  extends CustomBarChartProps,
    React.HTMLAttributes<HTMLDivElement> {}

const CustomBarChart: React.FC<ICustomBarChartProps> = ({ tests, className }) => {
  const [dateFrom, setDateFrom] = useState<string>("thisWeek");

  const handleDateChange = (value: string) => {
    setDateFrom(value);
  };

  const [startDate, endDate] = getDateRange(dateFrom);

  const filterTestsDate = tests.filter((test) => {
    return (
      new Date(test.writing.time_passed).getTime() >= startDate.getTime() &&
      new Date(test.writing.time_passed).getTime() <= endDate.getTime()
    );
  });

  // Initialize scores
  const skills = ['reading', 'writing', 'listening', 'speaking'];
  const skillAverages = skills.reduce((acc, skill) => {
    acc[skill] = filterTestsDate.reduce((total, test) => total + test[skill].score, 0) / filterTestsDate.length || 0;
    return acc;
  }, {});

  // Prepare data for bar chart
  const data = skills.map(skill => ({
    name: skill.charAt(0).toUpperCase(), // Capitalize first letter
    score: skillAverages[skill]
  }));



  return (
    <div
      className={cn(
        "rounded-[12px] bg-white px-[20px] py-[21px]",
        className,
      )}
    >
      <header className="mb-[36px] flex items-center justify-between">
        <p className="text-subHeading3  font-semibold">Average Scores</p>
        <FilterDate dateFrom={dateFrom} handleDateChange={handleDateChange} />
      </header>

      <ResponsiveContainer width="100%" height={447}>
        <BarChart
          data={data}
          barSize={14}
          margin={{
            top: 5,
            // left: 20,
            bottom: 30,
          }}
        >
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            padding={{ left: 23, right: 23 }}
            dy={19}
            fontSize={20}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 9]}
            fontSize={20}
            dx={-10}
            width={30}
          />
          <Tooltip />
          <Bar
            dataKey="score"
            radius={50}
            fill="#55BBEB"
            background={{ fill: "#EEF0FA" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
