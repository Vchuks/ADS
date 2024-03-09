import Text from "../atom/Text";
import { IoSearchSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { MapContext } from "../context/MapContext";

type myType = {
  accident_type: "";
  agent_id: "";
  assigned_at: "";
  closed_status: null;
  created_at: "";
  date: "";
  deviceid: "";
  id: "";
  lat: "";
  log: "";
  name: "";
  nature_of_request: "";
  priority: "";
  request_accepted: "";
  responder_id: "";
  time: "";
};

const Devices = () => {
  const { setGeo, filter, setTable, setBell } = useContext(MapContext);
  const [device, setDevice] = useState<string>("");

  const [user, setUser] = useState<Array<myType>>([]);

  const handleSearch = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

    fetch(
      `https://zubitechs.com/ads_apis/api/dashboard_api?searchvalue=${device}&filter_type=${filter}`,
      {
        method: "GET",
        headers: tokHead,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.records.data) {
          setTable(result.records.data);
        } else setUser(result.records);
      })
      .catch((err) => console.log(err));
  };

  

  useEffect(() => {
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
  setBell(result.notifications)
          setUser(result.records);
        })
        .catch((err) => console.log(err));
    };
    if (device === "") {
      getUsers();
    }

    getUsers();
  }, [device, setBell]);

  return (
    <div className="device-box lg:w-[35%] p-4 maph maph-device xxxl:h-auto ">
      <Text
        className="text-tcolor text-2xl font-extrabold pb-2 border-b-2 border-opacity-5 border-black"
        body="All Devices"
      />
      <div className="flex py-4">
        <div className="bg-bcolor rounded-s-lg p-3" onClick={handleSearch}>
          <IoSearchSharp className="text-white" />
        </div>
        <input
          className="outline-bcolor w-full ps-3"
          type="search"
          placeholder="Search..."
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        />
      </div>
      {user?.map((each) => {
       
        return (
          <div
            key={each.id}
            onClick={() => {
              setGeo({
                lat: each?.lat,
                log: each?.log,
              });
            }}
            className="flex justify-between items-center py-1 gap-1"
          >
            <p className="font-medium font-quicksand text-[#464F60]">
              Device:{" "}
              <span className="font-medium font-quicksand text-[#464F60]">
                {each.deviceid}
              </span>
            </p>
            <BsFillTelephoneFill className="text-bcolor" />
            <Text
              className="text-[#62C554] font-extrabold font-roboto lg:text-lg"
              body="Online"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Devices;
