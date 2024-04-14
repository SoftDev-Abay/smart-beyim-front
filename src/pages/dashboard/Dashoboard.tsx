import { useEffect, useState } from "react";

import CustomBarChart from "../../components/charts/CustomBarChart";
import CustomLineChart from "../../components/charts/CustomLineChart";

import SummaryAvgScore from "../../components/UI/summaryCards/SummaryAvgScore";
import SummaryAvgTime from "../../components/UI/summaryCards/SummaryAvgTime";
import SummaryTotal from "../../components/UI/summaryCards/SummaryTotal";
import { IeltsTest } from "../../types/ieltstests";
// @ts-ignore

import axios from "axios";

const Dashboard = ({ pageTitle }: { pageTitle: string }) => {
  // const [transactions, setTransactions] = useState([]);
  const [ieltsList, setIeltsList] = useState<IeltsTest[]>([]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082?user_id=1");
        const data = response.data;

        if (data.IeltsList) {
          setIeltsList(data.IeltsList);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(ieltsList);

  return (
    <div className="flex grid w-full max-w-6xl  grid-cols-1 flex-col gap-[19px] md:grid-cols-3">
      {/* Sales Summary Card */}

      <SummaryAvgScore
        className=" col-span-3 md:col-span-1"
        tests={ieltsList}
      />
      {/* Customers Summary Card */}
      <SummaryAvgTime className="col-span-3 md:col-span-1" tests={ieltsList} />

      {/* Orders Summary Card */}
      <SummaryTotal className="col-span-3 md:col-span-1" tests={ieltsList} />

      {/* Charts and Additional Cards */}
      {/* Adjusting for a 2-column layout on md screens and using available cols on larger screens */}

      {/* <div className="grid grid-cols-3"> */}
      <CustomLineChart className="col-span-3 lg:col-span-2" tests={ieltsList} />

      <CustomBarChart className="col-span-3 lg:col-span-1" tests={ieltsList} />
      {/* </div> */}

      {/* <CustomPieChart
        className=" md:col-span-1 "
        // data={CustomRadarChartData}
        data={CustomPieChartData}
        colors={CustomPieChartColors}
      /> */}

      {/* Recent Orders
      <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
        <RecentOrders />
      </div> */}
    </div>
  );
};

export default Dashboard;
