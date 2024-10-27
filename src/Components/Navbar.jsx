import { useContext } from "react";
import { useSidebar } from "../Context/SidebarContext";
import { DarkModeContext } from "../Context/DarkModeContext";
import NavLogo from "../assets/res/devsl.png";
import { motion } from "framer-motion";

import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import AccountBtn from "./AccountBtn";

const Navbar = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  const { darkMode, toggle } = useContext(DarkModeContext);
  const currentUser = false;

  return (
    <div
      className="bg-slate-50 shadow-md border-b border-neutral-200
     dark:border-neutral-600 dark:bg-neutral-800 top-0 sticky z-50 dark:text-neutral-300"
    >
      <div className="flex h-[50px] justify-between items-center mx-2">
        <div className="cursor-pointer items-center flex w-28 overflow-hidden object-cover">
          <img src={NavLogo} alt="NavLogo" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" gap-2 items-center hidden md:flex"
        >
          <h1 className="font-semibold text-[15px]">HAPPY COODING !</h1>
        </motion.div>
        <div className=" flex gap-2 items-center">
          <div className="flex items-center">
            <div
              onClick={toggleSidebar}
              className="flex h-[35px] lg:hidden text-2xl w-[35px] items-center justify-center rounded-full text-black dark:text-white"
            >
              {isSidebarOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-red-500"
                >
                  <IoClose />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-500"
                >
                  <FaBars />
                </motion.div>
              )}
            </div>
            <div
              onClick={toggle}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full text-black dark:text-white"
            >
              {darkMode ? (
                <div className="text-orange-400">
                  <WbSunnyOutlinedIcon />
                </div>
              ) : (
                <div className="text-blue-300">
                  <DarkModeOutlinedIcon />
                </div>
              )}
            </div>
          </div>
          {currentUser ? "" : <AccountBtn text={"Login"} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
