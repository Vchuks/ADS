import  { useContext } from "react";
import Search from "../Search";
// import AccidentModal from "./AccidentModal"
import { GoDotFill } from "react-icons/go";
import ActivitySum from "../report/ActivitySum";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapContext } from "../../context/MapContext";
import { BiLoaderCircle } from "react-icons/bi";
import Paginate from "../../atom/Paginate";
import { MyContext } from "../../context/MyContext";


type Data = {
  id: number;
  device_id: string;
  vehicle_name: string;
  device_number: string;
  status: string;
  last_accident_detected: string;
  last_sos_detected: string;
  owner_name: string;
  owner_phone_number: string;
  owner_address: string;
};

const Report = () => {
const {setId} = useContext(MapContext)
const {baseUrl} = useContext(MyContext)
  const [devices, setDevices] = useState([]);
  const [page,setPage] = useState(1)
  const [dResult,setDresult] = useState()
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    const getDevices = () => {
      setLoader(true)
      fetch(`${baseUrl}/ads_apis/api/get_devices?page=${page}`)
        .then((response) => response.json())
        .then((result) => {
          setDresult(result.devices)
          setDevices(result.devices.data)
          setLoader(false)
        })
        .catch((err) => console.log(err));
    };
    getDevices();
  }, [page,baseUrl]);

  return (
    <div>
      <Search />
      
          {loader &&<div className="h-full lg:h-screen bg-[#232323ab] z-20 border w-full top-0 fixed">
            <p className="w-4/5 flex h-3/4 lg:h-full  justify-center items-center ">
              <BiLoaderCircle className=" animate-spin  text-bg text-5xl" />
            </p>
          </div>}
      <div className="flex flex-col lg:flex-row px-5 py-4 gap-4 relative">
        <div className="overflow-x-scroll lg:absolute  w-full lg:w-[58%] lg:h-[90vh] lg:text-sm">
          {/* <TextLink
            to="details_page"
            className=""
            body={ */}
          <div className="w-max flex py-4 bg-white text-[#6E7680]">
            <div className="w-[150px] border-b px-2 break-words text-sm font-bold py-4 border-[#DDE5E9]">
              Device ID
            </div>
            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Vehicle Name
            </div>

            <div className="w-[150px] text-sm px-2 break-words border-b pe-2 lg:pe-0 font-bold py-4 border-[#DDE5E9]">
              Device Number
            </div>
            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Heartbeat
            </div>

            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Activity Status
            </div>
            {/* <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Last Accident Detected
            </div>
            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Last SOS Detected
            </div> */}
            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Owner Name
            </div>
            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Owner Phone Number
            </div>
            <div className="w-[150px] text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Owner Address
            </div>
            </div>
            {devices?.map((each: Data) => {
              return (
                <Link
                key={each.id}
                  to={{
                    pathname: "/device_report/details_page",
                    search: `?device_id=${each.device_id}`,
                  }}
                >
                  <div  className="w-max flex py-4 bg-white text-[#6E7680]" onClick={()=>setId(each.device_id)} >
                    <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                      {each?.device_id}
                    </div>
                    <div className="w-[150px] border-b px-2 break-words  py-4 border-[#DDE5E9]">
                      {each?.vehicle_name}
                    </div>
                    <div className="w-[150px] break-words px-2 border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9] ">
                      {each?.device_number}
                    </div>
                    <div className="w-[150px] border-b px-2 break-words py-4 border-[#DDE5E9] "></div>
                    {each?.status === "online" ? (
                      <div className="w-[150px] border-b break-words py-4 border-[#DDE5E9] ">
                        <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                          <GoDotFill className="text-[#06C270]" />
                          Online
                        </div>
                      </div>
                    )
                    :(
                      <div className="w-[150px] break-words border-b py-4  border-[#DDE5E9]">
                        <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C99020] rounded-2xl w-max px-2">
                          <GoDotFill className="text-[#FFE5B0]" />
                          Offline
                        </div>
                      </div>
                    )}
                    {/* <div className="w-[150px]  break-words border-b px-2 py-4 border-[#DDE5E9]">
                      {each?.last_accident_detected}
                    </div>
                    <div className="w-[150px] break-words  px-2 border-b py-4 border-[#DDE5E9]">
                      {each?.last_sos_detected}
                    </div> */}
                    <div className="w-[150px] break-words  px-2 border-b py-4 border-[#DDE5E9]">
                      {each?.owner_name}
                    </div>
                    <div className="w-[150px]  break-words px-2 border-b py-4 border-[#DDE5E9]">
                      {each?.owner_phone_number}
                    </div>
                    <div className="w-[150px]  break-words px-2 border-b py-4 border-[#DDE5E9]">
                      {each?.owner_address}
                    </div>
                 
          </div>
                </Link>
              );
            })}
          {/* }
          /> */}
          {/* <Paginate/> */}
          <Paginate page={page} data={dResult} setPage={setPage} />
        </div>
        <div className="lg:w-[40%] lg:absolute right-0">
          <ActivitySum />
        </div>
      </div>
      {/* <AccidentModal /> */}
    </div>
  );
};

export default Report;
