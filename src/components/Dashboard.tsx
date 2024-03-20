import React, { useContext, useState, useEffect } from "react";
import Devices from "./admin/Devices";
import Header from "./admin/Header";
import Map from "./admin/Mapp";
import Users from "./admin/Users";
import { MapContext } from "./context/MapContext";
// import TextLink from "./atom/TextLink";
import { GoDotFill } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

type Data = {
  id: number;
  device_id: string;
  vehicle_name: string;
  device_number: string;
  device_ime: string;
  status: string;
  lat: string;
  log: string;
  owner_email: string;
  owner_name: string;
  owner_phone_number: string;
  owner_address: string;
  vehicle_model_year: string;
  vehicle_chasses_number: string;
  vehicle_plate_number: string;
};

const Dashboard = () => {
  const { table, report, filter, setTable, setId } = useContext(MapContext);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [device, setDevice] = useState<string>("");
  const [dloading, setDLoading] = useState<string | null>(null);

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    if (filter !== "") {
      setLoading("loading...");
      setDLoading(null);
      setError(null);
      fetch(
        `https://zubitechs.com/ads_apis/api/dashboard_api?filter_type=${filter}`,
        {
          method: "GET",
          headers: tokHead,
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.records.data) {
            setLoading(null);
            setDLoading(null);
            setError(null);
            setTable(result.records.data);
          }
        })
        .catch((err) => {
          setLoading(null);
          setDLoading(null);

          setError(err);
        });
    }
  }, [filter, setTable, device]);

  const handleSearch = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    setLoading("loading...");

    fetch(
      `https://zubitechs.com/ads_apis/api/dashboard_api?searchvalue=${device}&filter_type=${filter}`,
      {
        method: "GET",
        headers: tokHead,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.records.data) {
          setLoading(null);
          setError(null);
          setTable(result.records.data);
        }
      })
      .catch((err) => {
        setLoading(null);
        setError(err);
      });
  };

  return (
    <div className="bg-[#E2E1FE]  max-h-full">
      <Header
        subhead="Welcome to ADS Management Dashboard"
        headText="Dashboard"
      />
      <div className="w-full bg-[#E2E1FE] xl:h-[90%] h-full relative">
        {report.records.length === 0 && (
          <div className="h-full lg:h-screen bg-[#232323ab] z-20 border w-full top-0 absolute">
            <p className=" w-2/4 flex h-3/4 lg:h-full  justify-center items-center  m-auto">
              <BiLoaderCircle className=" animate-spin  text-bg text-5xl" />
            </p>
          </div>
        )}
        <Users />
        {/* {table.length <= 0 
        || (table.length >0 && filter === '' || filter === 'Manual Scan' || filter === 'ACCIDENT DETECTED' || filter === 'pending_case' || filter === 'attended_case' || filter === 'SOS') 
        && (
          
         )}  */}
        {table.length > 0 && (filter === "offline" || filter === "online") ? (
          <>
            <div
              className="flex gap-2 pt-4 px-4"
              onClick={() => location.reload()}
            >
              <IoArrowBackOutline className="text-2xl cursor-pointer text-tcolor" />
              <p>Back</p>
            </div>
            <div className="flex p-4 ">
              <div
                className="bg-bcolor rounded-s-lg p-3 cursor-pointer"
                onClick={handleSearch}
              >
                <IoSearchSharp className="text-white" />
              </div>
              <input
                className="outline-bcolor w-full ps-3 rounded-e-lg"
                type="search"
                placeholder="Search..."
                value={device}
                onChange={(e) => setDevice(e.target.value)}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4 px-5 py-8 lg:py-5">
            <Devices />
            <Map high="h-[50vh] lg:h-auto" />
          </div>
        )}
        {table.length > 0 && (filter === "offline" || filter === "online" || filter === 'away') && (
          <div className="flex flex-col  lg:flex-row px-5 py-4 gap-4 relative h-screen">
            <div className="overflow-x-scroll bg-white rounded-2xl lg:absolute  w-full  lg:h-[70vh] lg:text-sm">
              {dloading && <p>{dloading}</p>}
              {/* <TextLink
              to="/device_report/details_page"
              className=""
              body={ */}
              <div className="w-max flex  font-bold bg-white text-[#6E7680]">
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Device ID
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Vehicle Name
                </div>

                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Device Number
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Device IME
                </div>

                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Activity Status
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Vehicle Chasses Num
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Vehicle Model Year
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Vehicle Plate Number
                </div>

                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Owner Email
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Owner Name
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Owner Phone Number
                </div>
                <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                  Owner Address
                </div>
              </div>
              {loading && loading}
              {error && error}
              {table.length === 0 ? <p className="font-bold p-2 bg-white">No Device!</p> : table?.map((each: Data) => {
                return (
                  <React.Fragment key={each?.id}>
                    <Link
                      key={each.id}
                      to={{
                        pathname: "/device_report/details_page",
                        search: `?device_id=${each.device_id}`,
                      }}
                    >
                      <div
                        className="w-max flex  bg-white text-[#6E7680]"
                        onClick={() => setId(each.device_id)}
                      >
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.device_id}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.vehicle_name}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.device_number}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.device_ime}
                        </div>
                        {each?.status === "online" && (
                          <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                            <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                              <GoDotFill className="text-[#06C270]" />
                              Online
                            </div>
                          </div>
                        )}
                        {each?.status === "offline" && (
                          <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                            <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C99020] rounded-2xl w-max px-2">
                              <GoDotFill className="text-[#FFE5B0]" />
                              Offline
                            </div>
                          </div>
                        )}
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.vehicle_chasses_number}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.vehicle_model_year}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.vehicle_plate_number}
                        </div>

                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.owner_email}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.owner_name}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.owner_phone_number}
                        </div>
                        <div className="w-[150px] break-words px-2  border-b py-4 border-[#DDE5E9]">
                          {each?.owner_address}
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
