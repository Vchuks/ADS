import { GiHamburgerMenu } from "react-icons/gi";
import Text from "../atom/Text";
import { useContext, useState } from "react";
import Sidebar from "../Sidebar";
import { IoIosNotifications } from "react-icons/io";
import { MapContext } from "../context/MapContext";
import { Link } from "react-router-dom";

type textProps = {
  headText: string;
  subhead: string;
};
// type myType = {
//   accident_type: "";
//   agent_id: "";
//   assigned_at: "";
//   closed_status: null;
//   created_at: "";
//   date: "";
//   deviceid: "";
//   id: "";
//   lat: "";
//   log: "";
//   name: "";
//   nature_of_request: "";
//   priority: "";
//   request_accepted: "";
//   responder_id: "";
//   time: "";
// };

const Header = (props: textProps) => {
  const { bell, setId } = useContext(MapContext);
  const { headText, subhead } = props;
  const [openSide, setOpenSide] = useState(false);
  const [notify, setNotify] = useState(false);
 
  const handleNav = () => {
    setOpenSide(!openSide);
  };
  const handleNotify = () => {
    setNotify(!notify);
  };
  const date = new Date();
  const d = date.toUTCString()

  return (
    <>
      <div className="bg-white px-5 z-10 py-4 w-full sticky top-0 flex items-center gap-x-3 lg:gap-x-0 justify-between">
        <div className="flex items-center gap-2 lg:gap-5">
          <GiHamburgerMenu className="text-2xl lg:hidden" onClick={handleNav} />
          <div>
            <Text
              className="font-roboto pb-1 text-tcolor font-semibold leading-none text-lg md:text-xl lg:text-[32px]"
              body={headText}
            />
            <Text
              className="text-[#464F60] text-xs lg:text-base"
              body={subhead}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex relative" onClick={handleNotify}>
            <IoIosNotifications className="text-lg lg:text-3xl" />
            {bell.length > 0 && (
              <span className="bg-blue-500 text-white rounded-full px-1 text-xs lg:text-base lg:px-2 absolute -top-2 left-2">
                {bell.length}
              </span>
            )}
          </div>
          <Text
            className="text-bcolor text-xs lg:text-base"
            body={d}
          />
        </div>
      </div>
      {notify && <div className="w-[30%] p-4 absolute right-0 bg-white rounded-b-xl">
        {bell?.map((each) => {
          return (
            <Link
            key={each.id}
                  to={{
                    pathname: "/device_report/details_page",
                    search: `?device_id=${each.deviceid}`,
                  }}
                ><div className="flex justify-between items-center py-2 gap-1" onClick={()=>setId(each.deviceid)}>
              <p className="font-medium font-quicksand text-[#464F60]">
                Device:{" "}
                <span className="font-semibold font-quicksand text-[#464F60]">
                  {each?.deviceid}
                </span>
              </p>
              {each?.closed_status === 0 ? (
                <p className=" cursor-pointer font-semibold">View Details</p>
              ) : (
                <p className="cursor-pointer">Assign</p>
              )}
            </div>
            </Link>
          );
        })}
      </div>}
      <div className="block lg:hidden ">{openSide && <Sidebar />}</div>
    </>
  );
};

export default Header;
