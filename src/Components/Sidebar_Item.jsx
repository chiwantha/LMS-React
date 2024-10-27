/* eslint-disable react/prop-types */

import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar_Item = ({ title, icon, link }) => {
  return (
    <div className="">
      <Link to={link ? link : "/"}>
        <div className="  px-3 py-2 rounded-md hover:font-bold bg-slate-200 dark:bg-slate-700 dark:border-neutral-100 hover:border-l-4 border-neutral-500">
          <div className="flex gap-3 items-center text-lg dark:text-slate-300 text-neutral-800">
            <h2>{icon ? icon : <FaArrowRightToBracket />}</h2>
            <h2>{title ? title : "Empty Item"}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar_Item;
