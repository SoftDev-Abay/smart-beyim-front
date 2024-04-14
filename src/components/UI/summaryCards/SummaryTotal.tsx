import React from "react";
import { dataSummary } from "../assets";
import { IeltsTest, IeltsSkillTest } from "../../../types/ieltstests";
import SummaryCard from "./SummaryCard";
import { useState } from "react";
import { getDateRange } from "../../../utils/utils";
interface ISummaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tests: IeltsTest[];
}

const SummaryTotal: React.FC<ISummaryCardProps> = ({
  tests,
  className,
}) => {
  //  intitial state for the filterDateRange is last 7 days, it should be a today date minus 7 days
  const today = new Date();

  const [dateFrom, setDateFrom] = useState<string>("thisWeek");

  const handleDateChange = (value: string) => {
    setDateFrom(value);
  };

  const [startDate, endDate] = getDateRange(dateFrom);


  const filterTestsDate = tests.filter((test) => {
    return (
      new Date(test.writing.time_passed).getTime() > startDate.getTime() &&
      new Date(test.writing.time_passed).getTime() < endDate.getTime()
    );
  });

  const totalScoreTests = filterTestsDate.reduce((acc, test) => {
    return acc + (test.listening.score + test.reading.score + test.speaking.score + test.writing.score)/4 ;
  }, 0);

  console.log(filterTestsDate)

  const testsVolume = filterTestsDate.length;

  const salesSummary = {
    ...dataSummary.salesSummary,
    data: [{ label: "Total tests taken", value: testsVolume }],
  };

  return (
    <SummaryCard
      iconName={"LetterSvg"}
      onDateChange={handleDateChange}
      dateFrom={dateFrom}
      data={salesSummary.data}
      highlight={salesSummary.highlight}
      className={className}
    />
  );
};

export default SummaryTotal;
