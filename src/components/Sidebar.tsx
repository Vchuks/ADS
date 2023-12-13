import Image from "./atom/Image";
import logo from "../assets/image/icon.png";
import device from "../assets/image/memory.png";
import Text from "./atom/Text";
import { NavLink } from "react-router-dom";
import { PiClockBold } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const Sidebar = () => {
 
  return (
    <div className="bg-[#020062] fixed top-[83px] w-11/12 lg:top-0 lg:relative dash-height p-4 box-border" id='sidebar'>
      <div className="flex gap-1 items-center">
        <div className="w-6">
          <Image className="w-full" alt="" src={logo} />
        </div>
        <Text
          className="font-roboto text-white font-medium text-2xl"
          body="ADS MANAGER"
        />
      </div>
      <div className="flex flex-col box-border pt-6 h-[85%] navbar justify-between">
        <div className="flex flex-col gap-5">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded text-lg text-white"
          >
            <PiClockBold className="text-2xl " />
            Dashboard
          </NavLink>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 rounded  text-lg text-white"
          >
            <div className="w-6 ">
              <Image className="w-full" alt="" src={device} />
            </div>
            Device Report
          </NavLink>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 rounded text-lg text-white"
          >
            <MdOutlinePeopleAlt className="text-2xl" />
            Responder
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 rounded text-lg text-white"
          >
            <FiSettings className="text-2xl" />
            Settings
          </NavLink>
        </div>
      </div>
      <div className="flex pt-2 xl:pt-4 gap-2 items-center text-white border-t border-[#4742FF]">
        <RxAvatar className="text-5xl" />
        <div className="w-full">
          <Text className="text-lg text-white" body="name" />
          <Text className=" text-lg text-white" body="email" />
        </div>
        <FiLogOut className="text-2xl" />
      </div>
    </div>
  );
};

export default Sidebar;
