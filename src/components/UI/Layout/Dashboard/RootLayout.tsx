import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import { Outlet } from "react-router-dom";
const RootLayout = () => (
  <>
    <div className="flex">
      <LeftSideBar />
      <main className="flex-1 ">
        <Topbar />
        <section className="main-container ">
          {/* <div className="w-full max-w-6xl flex flex-col"> */}
            <Outlet   />
          {/* </div> */}
        </section>
      </main>
    </div>
  </>
);
export default RootLayout;
