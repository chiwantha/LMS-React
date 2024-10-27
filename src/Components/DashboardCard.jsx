/* eslint-disable react/prop-types */
import { MdDashboard } from "react-icons/md";

const colorClasses = {
  orange: "bg-orange-300",
  green: "bg-green-300",
  blue: "bg-blue-300",
  red: "bg-red-300",
  yellow: "bg-yellow-300",
  purple: "bg-purple-300",
  pink: "bg-pink-300",
  teal: "bg-teal-300",
  indigo: "bg-indigo-300",
};

const DashboardCard = ({ title, icon, color = "green", value }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex flex-col rounded-md p-4  ${
          colorClasses[color] || "bg-green-400"
        }`}
      >
        <div className="flex justify-start gap-2 items-center ">
          <h1 className="text-[15px] md:text-lg lg:text-xl font-light">
            {title ? title : "Card Title"}
          </h1>
        </div>

        <div className="text-4xl  flex font-bold text-neutral-800">
          {value ? value : "00"}
        </div>
        <h1 className="absolute bottom-[-10px] text-neutral-600/15 right-[-20px] text-8xl">
          {icon ? icon : <MdDashboard />}
        </h1>
      </div>
    </div>
  );
};

export default DashboardCard;
