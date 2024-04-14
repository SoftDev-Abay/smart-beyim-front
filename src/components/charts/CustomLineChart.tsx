//  import <HTMLDivElement> to the ref type
import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  CartesianAxis,
} from "recharts";

import FeatherIcon from "feather-icons-react";

import { cn } from "../../utils/utils";

import FilterDate from "../UI/FilterDate";

import {IeltsSkillTest, IeltsTest} from "../../types/ieltstests"

interface CustomLineChartProps {
  tests: IeltsTest[];
}

interface ICustomLineChartProps
  extends CustomLineChartProps,
    React.HTMLAttributes<HTMLDivElement> {}

const CustomLineChart: React.FC<ICustomLineChartProps> = ({
  tests,
  ...props
}) => {
  const [currentSkill, setCurrentSkill] = useState<string>("Reading");

  const options = ["Reading", "Listening", "Speaking", "Writing"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentSkillTests = tests.map((test) => test[currentSkill.toLowerCase()]);

  const modifiedSkillTests = currentSkillTests.map((test)=>({...test, time_passed:test.time_passed.split("T")[0], score:Math.round(test.score * 2) / 2}))
  
  console.log(modifiedSkillTests)
  

  // let minAxisYInterval = currentSkillTests.length > 0 &&
  // currentSkillTests.reduce((min, testSkill) => (testSkill.score < min ? testSkill.score : min), currentSkillTests[0].score) -
  //   0.5;

  const minAxisYInterval = modifiedSkillTests.length > 0
  ? modifiedSkillTests.reduce((min, testSkill) => Math.min(min, testSkill.score), modifiedSkillTests[0].score) - 0.5
  : 0;

  // const scores = currentSkillTests.map((test) => test.score);
  // const minAxisYInterval = Math.min(...scores) - 0.5 > 0 ? Math.min(...scores) - 0.5 : 0;



  const handleCurrentSkill = (value: string) => {
    setCurrentSkill(value);
  };

  return (
    <div
      className={cn(
        "rounded-[12px] bg-white px-[20px] py-[21px]",
        props.className,
      )}
    >
      <header className="mb-[36px] flex items-center justify-between">
        <p className="text-subHeading3  font-semibold">Results</p>
        <div className="relative">
          <div
            className={`flex cursor-pointer items-center gap-[7px] rounded-md border-2 border-[#D5D5D5] bg-[#FCFDFD] px-3 py-2 text-secondary-700 `}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onBlur={() => setIsDropdownOpen(false)}
          >
            <p className="text-p2">{currentSkill}</p>
            <FeatherIcon
              icon="chevron-down"
              className="text-label1"
              size={16}
            />
          </div>
          {/*  dropdown  */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-[120%] z-10 flex flex-col rounded-md   bg-white  py-3 shadow-2xl">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    handleCurrentSkill(option);
                    setIsDropdownOpen(false);
                  }}
                  className={cn(
                    `flex w-[130px] cursor-pointer items-center gap-[7px] px-5 py-[6px] text-black-300   hover:bg-primary-700 hover:text-white ${option === currentSkill && "bg-primary-700 text-white"}`,
                  )}
                >
                  <p className="text-label1">{option}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <ResponsiveContainer width="100%" height={447}>
        <LineChart
          width={500}
          height={300}
          data={modifiedSkillTests}
          margin={{
            top: 5,
            right: 30,
            // left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <CartesianAxis axisLine={true} /> */}
          <XAxis dataKey="time_passed" axisLine={false} dy={20} tickLine={false} />
          <YAxis
            // interval={"preserveStart"}
            domain={[minAxisYInterval, 9]}
            axisLine={false}
            tickLine={false}
            dx={-25}
          />
          <Tooltip />
          <Line dataKey="score" stroke="#4379EE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
