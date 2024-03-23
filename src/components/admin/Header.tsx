import { GiHamburgerMenu } from "react-icons/gi";
import Text from "../atom/Text";
import { useContext, useState, useEffect } from "react";
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
  const { bell, setId, setBell, setReport, setResult } = useContext(MapContext);
  const { headText, subhead } = props;
  const [openSide, setOpenSide] = useState(false);
  const [notify, setNotify] = useState(false);
  const [type, setType] = useState('');
  const [, setAccept] = useState<string>();

  const handleNav = () => {
    setOpenSide(!openSide);
  };
  const handleNotify = () => {
    setNotify(!notify);
  };
  const date = new Date();
  const d = date.toDateString();

  const getUsers = () => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");
setType(getToken.message[0].type)
    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

    fetch("https://zubitechs.com/ads_apis/api/dashboard_api", {
      method: "GET",
      headers: tokHead,
    })
      .then((response) => response.json())
      .then((result) => {
        setReport(result)
        setResult(result.details)
        setBell(result.notifications)
  
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    getUsers()
  },[setBell,setResult,setReport])
  // setInterval(()=>{getUsers()},60000)
  
  useEffect(() => {
    const interval = setInterval(() => {
      ()=>getUsers();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAccept = (id:number)=>{
    const getToken = JSON.parse(localStorage.getItem("user") || "");
    
        const tokHead = new Headers();
        tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    
        fetch(`https://zubitechs.com/ads_apis/api/accept?id=${id}`, {
          method: "GET",
          headers: tokHead,
        })
          .then((response) => response.json())
          .then((result) => {
           setAccept(result.message)
      
          })
          .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="bg-white px-5 z-20 py-4 w-full sticky top-0 flex items-center gap-x-3 lg:gap-x-0 justify-between">
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
          <div className="flex relative cursor-pointer" onClick={handleNotify}>
            <IoIosNotifications className="text-lg lg:text-3xl" />
            {bell.length > 0 && (
              <span className="bg-blue-500 text-white rounded-full px-1 text-xs lg:text-base lg:px-2 absolute -top-2 left-2">
                {bell.length}
              </span>
            )}
          </div>
          <Text className="text-bcolor text-xs lg:text-base" body={d} />
        </div>
      </div>
      {notify && (
        <div className="lg:w-[30%] p-4 absolute overflow-y-scroll right-0 h-60 bg-white rounded-b-xl shadow-lg  z-10">
          {bell?.map((each) => {
            return (
              <div
                key={each.id}
                className="flex justify-between items-center py-2 gap-1"
              >
                <p className="font-medium font-quicksand text-[#464F60]">
                  Device:{" "}
                  <span className="font-semibold font-quicksand text-[#464f60]">
                    {each?.deviceid}
                  </span>
                </p>
                {type === 'agent' ? (
                  <Link
                    to={{
                      pathname: "/device_report/details_page",
                      search: `?device_id=${each.deviceid}`,
                    }}
                  >
                  <>
                    <p
                      onClick={() =>{ 
                        setId(each.deviceid)
                        handleAccept(each.id)
                        setNotify(false)
                      }
                      }
                      className=" cursor-pointer text-bcolor "
                    >Accept
                    </p>
                      
                      </>
                   </Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/device_report/details_page",
                      search: `?device_id=${each.deviceid}`,
                    }}
                  >
                    <p
                      onClick={(e:React.MouseEvent<HTMLParagraphElement>) =>{ 
                        setId(each.deviceid)
                          e.currentTarget.style.color = '#464f60'
                          setNotify(false)
                        
                      }}
                      className="cursor-pointer font-semibold"
                    >
                      View Details
                    </p>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className="block lg:hidden ">{openSide && <Sidebar />}</div>
    </>
  );
};

export default Header;
