import Search from "../Search";
// import AccidentModal from "./AccidentModal"
import { GoDotFill } from "react-icons/go";
import ActivitySum from "../report/ActivitySum";
import TextLink from "../../atom/TextLink";
import { useEffect, useState } from "react";

type Data = {
  device_id: string,
  vehicle_name: string,
  device_number: string,
  status: string,
  last_accident_detected: string,
  last_sos_detected: string,
  owner_name: string,
  owner_phone_number: string,
  owner_address: string
}
const Report = () => {
  const [devices, setDevices] =useState([])
  

  const getDevices =()=>{
    fetch('https://zubitechs.com/ads_apis/api/get_devices')
    .then((response)=>response.json())
    .then(result=> setDevices(result.devices))
    .catch(err=> console.log(err))
  }
  useEffect(()=>{
    getDevices()
    
  },[devices])
  console.log(devices)
  return (
    <div>
      <Search />
      <div className="flex flex-col lg:flex-row px-5 py-4 gap-4">
        <div className="overflow-x-scroll md:overflow-auto w-full lg:text-sm">
          
          <TextLink to='details_page' className="" body={
          <div className="w-max lg:w-full grid grid-cols-10 py-4 bg-white text-[#6E7680]">
            
            <div className="w-full border-b px-2 break-words text-sm font-bold py-4 border-[#DDE5E9]">
              Device ID
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Vehicle Name
            </div>

            <div className="w-full text-sm px-2 break-words border-b pe-2 lg:pe-0 font-bold py-4 border-[#DDE5E9]">
              Device Number
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Heartbeat
            </div>

            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Activity Status
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Last Accident Detected
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Last SOS Detected
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Owner Name
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Owner Phone Number
            </div>
            <div className="w-full text-sm px-2 break-words border-b font-bold py-4 border-[#DDE5E9]">
              Owner Address
            </div>
          {devices?.map((each: Data) => {
          return <>

            <div className="w-full break-words px-2 border-b py-4 border-[#DDE5E9]">{each?.device_id}</div>
            <div className="w-full border-b px-2 break-words py-4 border-[#DDE5E9]">
              {each?.vehicle_name}
            </div>
            <div className="w-full break-words px-2 border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9]">
            {each?.device_number}
            </div>
            <div className="w-full border-b px-2 break-words py-4 border-[#DDE5E9]">
              
            </div>
            {each?.status === 'online' &&<div className="w-full border-b break-words py-4 border-[#DDE5E9]">
              <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#06C270]" />
                Online
              </div>
            </div>}
            {each?.status === 'offline' &&<div className="w-full break-words border-b py-4 border-[#DDE5E9]">
              <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C99020] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#FFE5B0]" />
                Offline
              </div>
            </div>}
            <div className="w-full break-words border-b px-2 py-4 border-[#DDE5E9]">
              {each?.last_accident_detected}
            </div>
            <div className="w-full break-words px-2 border-b py-4 border-[#DDE5E9]">{each?.last_sos_detected}</div>
            <div className="w-full break-words px-2 border-b py-4 border-[#DDE5E9]">
              {each?.owner_name}
            </div>
            <div className="w-full  break-words px-2 border-b py-4 border-[#DDE5E9]">
            {each?.owner_phone_number}
            </div>
            <div className="w-full break-words px-2 border-b py-4 border-[#DDE5E9]">
            {each?.owner_address}
            </div>

            </>
          })}
           
          </div>} />
        </div>
        <div className="lg:w-[45%]">
          <ActivitySum />
        </div>
      </div>
      {/* <AccidentModal /> */}
    </div>
  );
};

export default Report;
