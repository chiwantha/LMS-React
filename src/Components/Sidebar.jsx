import { useSidebar } from "../Context/SidebarContext";
import Sidebar_Item from "./Sidebar_Item";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsChatLeftHeart } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } fixed lg:sticky p-3 lg:block top-[50px] z-40 bottom-0 h-[calc(100vh-50px)]
     bg-slate-50 dark:bg-neutral-800 dark:border-neutral-600 border-r shadow-md border-neutral-300 overflow-y-auto overflow-x-hidden`}
      id="sidebar"
    >
      <div className="rounded-lg w-[250px] space-y-3">
        <div className="w-full text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-col items-center py-5 w-full bg-slate-200 dark:bg-slate-600 rounded-md ">
            <div className="">
              <div className="rounded-full text-white bg-blue-500 w-20 h-20 flex items-center justify-center text-4xl">
                <FaUser />
              </div>
            </div>
            <div className="pt-3  flex flex-col items-center text-neutral-800 dark:text-neutral-200">
              <h1 className="text-lg font-bold">Student Name</h1>
              <Link to={"/"}>
                <span className="hover:underline">view profile</span>
              </Link>
            </div>
          </div>
          <br />
          <div className="space-y-2">
            <h2>Account</h2>
            <div className="pl-1 space-y-2">
              <Sidebar_Item
                title={"Dashboard"}
                icon={<RiDashboardHorizontalFill />}
              />
              <Sidebar_Item title={"myClass"} icon={<SiGoogleclassroom />} />
              <Sidebar_Item title={"Payments"} icon={<FaRupeeSign />} />
              <Sidebar_Item title={"Mails"} icon={<HiInboxArrowDown />} />
              <Sidebar_Item title={"Ticket"} icon={<IoTicket />} />
            </div>
          </div>
          <br />
          <div className="space-y-3 w-full">
            <h2>Shop</h2>
            <div className="pl-1 space-y-2">
              <Sidebar_Item title={"Class"} icon={<SiGoogleclassroom />} />
              <Sidebar_Item title={"Tutors"} icon={<FaUserGraduate />} />
            </div>
          </div>
          <br />
          <div className="space-y-3 w-full">
            <h2>Other</h2>
            <div className="pl-1 space-y-2">
              <Sidebar_Item
                title={"Ask-Admin"}
                icon={<MdConnectWithoutContact />}
              />
              <Sidebar_Item title={"Tell-Us"} icon={<BsChatLeftHeart />} />
              <Sidebar_Item title={"About"} icon={<FaInfo />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
