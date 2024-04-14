import { useEffect, useState } from "react";
import { dataSummary } from "../../components/UI/assets";
import { Table } from "../../components/shadcn/ui/table";
// import { Payment, columns } from "../../components/table/columnsPrev";
import { columns } from "../../components/table/transactions_columns";

// import { DataTable } from "../../components/table/DataTable";
import { DataTable } from "../../components/table/data-table";
import data from "../../components/table/data/transactions.json";
import { z } from "zod";
import { taskSchema } from "../../components/table/data/schema";
import axios from "axios";
import {IeltsTest, IeltsSkillTest} from "../../types/ieltstests"

const Results = ({ pageTitle }: { pageTitle: string }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const [tests, setTests] = useState<IeltsTest[]>([])

  const getResults = async() =>{
    try {
      const responce = await axios.get("http://localhost:8082?user_id=1")
      const data = responce.data.IeltsList

      setTests(data)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getResults()
  },[])

  const skillsIndex = ["reading", "listening", "writing", "speaking"]

  

  const skillTests : IeltsSkillTest[] = []

  tests.forEach((test)=>{
    skillTests.push(test.listening)
    skillTests.push(test.reading)
    skillTests.push(test.speaking)
    skillTests.push(test.writing)
  })

  const testsSkillTransformed = skillTests.map((test)=>({
    ...test, test_type:skillsIndex[test.test_type - 1]
  }))

  return (
    <div className="grid grid-cols-1 gap-[19px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-dashboard-layout w-full max-w-6xl flex flex-col">
      <DataTable
        className="relative col-span-1 overflow-hidden md:col-span-2 lg:col-span-3"
        data={testsSkillTransformed}
        columns={columns}
      />
    </div>
  );
};

export default Results;
