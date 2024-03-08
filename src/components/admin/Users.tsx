import { useEffect, useState } from "react";
import Box from "../atom/Box";

type Data = {
  counts: {
    accident_detected: "";
    attended_case: "";
    manualscan: "";
    offlinedevice: "";
    onlinedevice: "";
    pending_case: "";
    responders: "";
    sos: "";
  };
  details: object;
  notifications: object;
};

const Users = () => {
  const [user, setUser] = useState<Data>({} as Data);

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
        setUser(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-2 pt-5">
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#62C554] cursor-pointer border hover:border-bcolor"
          firstText="Online"
          secondText={user?.counts?.onlinedevice}
          firstClass="text-white leading-none text-[20px] font-bold"
          secondClass="text-white leading-snug text-[17px]"
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#FFE8D3] border hover:border-bcolor cursor-pointer"
          firstText="Away"
          secondText=""
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#FFE5B0] border hover:border-bcolor cursor-pointer"
          firstText="Offline"
          secondText={user?.counts?.offlinedevice}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-3 py-4 xl:py-6 rounded-lg bg-[#FFD1D1] border hover:border-bcolor cursor-pointer"
          firstText="Accident Detected"
          secondText={user?.counts?.accident_detected}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#B3CBFB] border hover:border-bcolor cursor-pointer"
          firstText="SOS"
          secondText={user?.counts?.sos}
          firstClass=""
          secondClass=""
        />

        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#CCFFE7] border hover:border-bcolor cursor-pointer"
          firstText="Reviewed Cases"
          secondText=""
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#F1CBFF] border hover:border-bcolor cursor-pointer"
          firstText="Manual Report"
          secondText={user?.counts?.manualscan}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#DCCBFF] border hover:border-bcolor cursor-pointer"
          firstText="Attended Cases"
          secondText={user?.counts?.attended_case}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#F4FFC8] border hover:border-bcolor cursor-pointer"
          firstText="Pending Cases"
          secondText={user?.counts?.pending_case}
          firstClass=""
          secondClass=""
        />
        <Box
          mainClass="w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#DDFFF9] border hover:border-bcolor cursor-pointer"
          firstText="Responders"
          secondText={user?.counts?.responders}
          firstClass=""
          secondClass=""
        />
      </div>
    </>
  );
};

export default Users;
