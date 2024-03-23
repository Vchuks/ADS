import Text from "../atom/Text";
import { IoSearchSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BiLoaderCircle } from "react-icons/bi";

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
  const { setGeo, filter, setTable } = useContext(MapContext);
  const [device, setDevice] = useState<string>("");
  // const [loading, setLoading] = useState<string | null>(null);
  const [dloading, setDLoading] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<Array<myType>>([]);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    if (filter !=='') {
      setLoading("loading...");
    setDLoading(null);
    setLoader(true)
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
            setLoader(false)
            setDLoading(null);
            setError(null);
            setTable(result.records.data);
          } else {
            setLoading(null);
            setDLoading(null);
            setLoader(false)
            setError(null);
            setUser(result.records)}
        })
        .catch((err) => {
          setLoading(null);
          setDLoading(null);
          setLoader(false)
          setError(err);
        });
    
    }else{
      setDLoading("loading...");
      setLoading(null);
      setLoader(true)
    setError(null);
    fetch("https://zubitechs.com/ads_apis/api/dashboard_api", {
      method: "GET",
      headers: tokHead,
    })
      .then((response) => response.json())
      .then((result) => {
        setDLoading(null);
        setLoading(null);
        setError(null);
        setLoader(false)
        setUser(result.records);
      })
      .catch((err) => {
        console.log(err);
        setDLoading(null);
        setLoading(null);
        setLoader(false)
        setError(err);
      });
    }
  }, [filter, setTable, device]);

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
          setError(null);
          setTable(result.records.data);
        } else setUser(result.records);
      })
      .catch((err) => {
        setError(err);
      });
  };

 


  return (
    <>
    {loader && (
      <div className="h-full lg:h-screen bg-[#232323ab] z-20 border w-full left-0 top-0 fixed">
        <p className=" w-2/4 flex h-3/4 lg:h-full  justify-center items-center  m-auto">
          <BiLoaderCircle className=" animate-spin  text-bg text-5xl" />
        </p>
      </div>
    )}
    <div className="device-box lg:w-[35%] p-4 maph maph-device xxxl:h-auto ">
      <Text
        className="text-tcolor text-2xl font-extrabold pb-2 border-b-2 border-opacity-5 border-black"
        body="All Devices"
      />
      <div className="flex py-4">
        <div className="bg-bcolor rounded-s-lg p-3 cursor-pointer" onClick={handleSearch}>
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
      {dloading && <p className="text-xl font-bold">{dloading}</p>}
      {loading && <p className="text-xl font-bold">{loading}</p>}
      {error && <p>{error}</p>}
      {user.length <=0 ? <p className="font-medium font-quicksand text-[#464F60]">No Device!</p> : user?.map((each) => {
        return (
          <div
            key={each.id}
            onClick={() => {
              setGeo({
                lat: each?.lat,
                log: each?.log,
              });
            }}
            className="flex justify-between cursor-pointer items-center py-1 gap-1"
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
      </>
  );
};

export default Devices;
