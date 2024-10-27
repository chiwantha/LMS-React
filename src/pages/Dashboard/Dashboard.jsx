import DashboardCard from "../../Components/DashboardCard";

import { SiGoogleclassroom } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { PiExamFill } from "react-icons/pi";
import { IoHourglassOutline } from "react-icons/io5";
import PageTitleBar from "../../Components/PageTitleBar";
import LineChart from "../../Components/LineChart";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <PageTitleBar title={"DASHBOARD"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
        <DashboardCard
          color={`green`}
          title={"Class"}
          icon={<SiGoogleclassroom />}
        />
        <DashboardCard color={`blue`} title={"Wached"} icon={<GiCheckMark />} />
        <DashboardCard
          color={`yellow`}
          title={"Pending"}
          icon={<FaRupeeSign />}
        />
        <DashboardCard
          color={`purple`}
          title={"Ticket"}
          icon={<IoTicketSharp />}
        />
        <DashboardCard color={`red`} title={"Exams"} icon={<PiExamFill />} />
        <DashboardCard
          color={`orange`}
          title={"Hours"}
          icon={<IoHourglassOutline />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="py-52 bg-slate-200 rounded-md"></div>
        <div className="py-44 bg-slate-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default Dashboard;
