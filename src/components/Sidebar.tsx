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
import { useEffect, useState } from "react";
// import { MapContext } from "./context/MapContext";

const Sidebar = () => {
  const loginDetails = JSON.parse(localStorage.getItem("user") || "");
  const [userData] = useState(loginDetails);
  const [dashBoardLink, setDashboardLink] = useState(true);
  const [reportLink, setReportLink] = useState(true);
  const [agentLink, setAgentLink] = useState(true);
  const [responderLink, setResponderLink] = useState("");
  // const {result} = useContext(MapContext)

  useEffect(() => {
    // const btnRef = useRef<HTMLInputElement>(null)
    if (userData?.message[0]?.type === "responder") {
      setDashboardLink(false);
      setReportLink(false);
      setAgentLink(false);
      setResponderLink("/responder/details_page");
    } else {
      setDashboardLink(true);
      setReportLink(true);
      setAgentLink(true);
      setResponderLink("/responder");
    }
  }, [userData]);

  return (
    <div
      className="bg-[#020062] fixed lg:top-0 z-10 h-[90%] md:h-[100%] p-4 box-border"
      id="sidebar"
    >
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
          {dashBoardLink && (
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded text-lg text-white"
            >
              <PiClockBold className="text-2xl " />
              Dashboard
            </NavLink>
          )}
          {reportLink && (
            <NavLink
              to="/device_report"
              className="flex items-center gap-3 p-3 rounded  text-lg text-white"
            >
              <div className="w-6 ">
                <Image className="w-full" alt="" src={device} />
              </div>
              Device Report
            </NavLink>
          )}
          <NavLink
            to={responderLink}
            className="flex items-center gap-3 p-3 rounded text-lg text-white res"
          >
            <MdOutlinePeopleAlt className="text-2xl" />
            Responder
          </NavLink>
          {agentLink && (
            <NavLink
              to="/agent"
              className="flex items-center gap-3 p-3 rounded text-lg text-white"
            >
              <MdOutlinePeopleAlt className="text-2xl" />
              Agent
            </NavLink>
          )}
        </div>
        <div>
          <NavLink
            to="/ads"
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
        <FiLogOut
          className="text-2xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("user");
            location.href = "/ads";
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
