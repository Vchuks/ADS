import {  useContext, useEffect } from "react";
import Box from "../atom/Box";
import { MapContext } from "../context/MapContext";

// type Data = {
//   counts: {
//     accident_detected: "";
//     attended_case: "";
//     manualscan: "";
//     offlinedevice: "";
//     onlinedevice: "";
//     pending_case: "";
//     responders: "";
//     sos: "";
//   };
//   details: object;
//   notifications: object;
//   records: object
// };

const Users = () => {
  const {setReport,setResult, setBell, report, filter} = useContext(MapContext)
  // const [user, setUser] = useState<Data>({} as Data);

  
  const getUsers = () => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

    fetch("https://zubitechs.com/ads_apis/api/dashboard_api", {
      method: "GET",
      headers: tokHead,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setReport(result)
        setResult(result.details)
        setBell(result.notifications)
  
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    getUsers()
  },[])
//   setInterval(()=>{
//     getUsers();

// }, 60000)



  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-2 pt-5">
        <Box
          mainClass={`w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#62C554] cursor-pointer border-2 hover:border-bcolor ${filter === 'online' && 'border-2 border-bcolor'}`}
          firstText="Online"
          secondText={report?.counts?.onlinedevice}
          firstClass="text-white leading-none text-[20px] font-bold"
          secondClass="text-white leading-snug text-[17px]"
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#FFE8D3] border-2 hover:border-bcolor cursor-pointer"
          firstText="Away"
          secondText={report?.counts?.awaycase}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass={`w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#FFE5B0] border-2 hover:border-bcolor cursor-pointer ${filter === 'offline' && 'border-2 border-bcolor'}`}
          firstText="Offline"
          secondText={report?.counts?.offlinedevice}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass={`w-full text-center px-2 xl:px-3 py-4 xl:py-6 rounded-lg bg-[#FFD1D1] border-2 hover:border-bcolor cursor-pointer ${filter === 'ACCIDENT DETECTED' && 'border-2 border-bcolor'}`}
          firstText="Accident Detected"
          secondText={report?.counts?.accident_detected}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass={`w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#B3CBFB] border-2 hover:border-bcolor cursor-pointer ${filter === 'SOS' && 'border-2 border-bcolor'}`}
          firstText="SOS"
          secondText={report?.counts?.sos}
          firstClass=""
          secondClass=""
        />

        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#CCFFE7] border-2 hover:border-bcolor cursor-pointer"
          firstText="Reviewed Cases"
          secondText=""
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass={`w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#F1CBFF] border-2 hover:border-bcolor cursor-pointer ${filter === 'Manual Scan' && 'border-2 border-bcolor'}`}
          firstText="Manual Report"
          secondText={report?.counts?.manualscan}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass={`w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#DCCBFF] border-2 hover:border-bcolor cursor-pointer ${filter === 'attended_case' && 'border-2 border-bcolor'}`}
          firstText="Attended Cases"
          secondText={report?.counts?.attended_case}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass={`w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#F4FFC8] border-2 hover:border-bcolor cursor-pointer ${filter === 'pending_case' && 'border-2 border-bcolor'}`}
          firstText="Pending Cases"
          secondText={report?.counts?.pending_case}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#DDFFF9] border-2 hover:border-bcolor cursor-pointer"
          firstText="Responders"
          secondText={report?.counts?.responders}
          firstClass=""
          secondClass=""
        />
      </div>
    </>
  );
};

export default Users;
