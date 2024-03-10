import { useState, useEffect, useContext } from "react";
import AgentProfile from "./AgentProfile";
import { MapContext } from "../../context/MapContext";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
// import TextLink from "../../atom/TextLink";

type Data = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  status: string;
};

const Agent = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [color, setColor] = useState(true);
  const [access, setAccess] = useState(true);
  const [profile, setProfile] = useState(false);

  const { setGetAllAgents, getAllAgents, setEachAgent } = useContext(MapContext);

  const handleView = () => {
    if (all) {
      setColor(true);
      setActive(false);
      setInActive(false);
    } else if (active) {
      setColor(true);
      setAll(false);
      setInActive(false);
    } else if (inActive) {
      setColor(true);
      setAll(false);
      setActive(false);
    }
  };
  useEffect(() => {
    const fetchAgent = () => {
      const getToken = JSON.parse(localStorage.getItem("user") || "");

      const tokHead = new Headers();
      tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

      fetch("https://zubitechs.com/ads_apis/api/get_agents", {
        method: "GET",
        headers: tokHead,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success === false) {
            setProfile(true);
            setAccess(false);
          } else {
            console.log(result);
            setAccess(true);
            setProfile(false);
            setGetAllAgents(result);
          }
        })
        .catch((err) => console.log(err));
    };
    fetchAgent();
  }, [setGetAllAgents]);
  
  const handleEach =(id)=>{
    const getToken = JSON.parse(localStorage.getItem("user") || "");

      const tokHead = new Headers();
      tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    fetch(`https://zubitechs.com/ads_apis/api/get_agent_details?id=${id}`,
    {
      method: 'GET',
      headers: tokHead
    })
    .then((res)=> res.json())
    .then((result) => {console.log(result)
    setEachAgent(result)})
    .catch(err => console.log(err))
  }

  return (
    <div className="px-5 py-4">
      {access && (
        <>
          <div className="w-full md:w-auto flex">
            <button
              className={`w-full md:w-auto md:py-2 md:px-6 font-semibold ${
                color && `text-[#1410B4] border-b-2 border-[#1410B4]`
              }`}
              onClick={handleView}
            >
              All Agent
            </button>
            <button
              className={`w-full md:w-auto md:py-2 md:px-6 font-semibold`}
              onClick={handleView}
            >
              Active Agent
            </button>
            <button
              className={`w-full md:w-auto md:py-2 md:px-6 font-semibold`}
              onClick={handleView}
            >
              Inactive Agent
            </button>
          </div>
          <div className="flex flex-col lg:flex-row md:px-5 py-4 gap-4 relative">
            <div className="overflow-x-scroll lg:overflow-auto absolute  w-full">
              {all && (
                <>
                  <div className="w-full">
                    <div className="w-max flex text-sm  bg-white text-[#6E7680] ">
                      <div className="w-[150px]  border-b font-bold py-4 border-[#DDE5E9]">
                        Agent Name
                      </div>
                      <div className="w-[150px]  border-b font-bold py-4 border-[#DDE5E9]">
                        Agent Email
                      </div>

                      <div className="w-[150px] border-b pe-2 lg:pe-0 font-bold py-4 border-[#DDE5E9]">
                        Phone Number
                      </div>
                      <div className="w-[150px] border-b font-bold py-4 border-[#DDE5E9]">
                        Status
                      </div>

                      <div className="w-[150px]  border-b font-bold py-4 border-[#DDE5E9]">
                        Accepted Tasks
                      </div>
                      <div className="w-[150px]  border-b font-bold py-4 border-[#DDE5E9]">
                        Started Date
                      </div>
                    </div>
                  </div>
                  {getAllAgents?.data?.map((each: Data) => {
                    return (
                      <Link
                key={each.id}
                to={{
                  pathname: "details_page",
                  search: `?id=${each.id}`,
                }}
              >
                      <div
                        key={each.id}
                        onClick={()=>handleEach(each.id)}
                        className=" w-max  flex bg-white text-[#6E7680]"
                      >
                        <div className="w-[150px]  break-words border-b py-4 border-[#DDE5E9]">
                          {each?.name}
                        </div>
                        <div className="w-[150px]  break-words border-b py-4 border-[#DDE5E9]">
                          {each?.email}
                        </div>
                        <div className="w-[150px]  break-words border-b py-4  lg:pe-0 border-[#DDE5E9]">
                          {each?.phone_number}
                        </div>
                        <div className="w-[150px]  break-words border-b py-4 border-[#DDE5E9]">
                          {each?.status === "online" ? (
                            <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                              <GoDotFill className="text-[#06C270]" />
                              In a mission
                            </div>
                          ) : (
                            <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max px-2">
                              <GoDotFill className="text-[#FF3B3B]" />
                              Not on a mission
                            </div>
                          )}
                        </div>
                        <div className="w-[150px]  break-words border-b py-4 border-[#DDE5E9]">
                          {/* 20 Jobs */}
                        </div>
                        <div className="w-[150px]  break-words border-b py-4 border-[#DDE5E9]">
                          {/* May 19, 2020 */}
                        </div>
                      </div>
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </>
      )}
      {profile && <AgentProfile />}

      {active && <div></div>}
      {inActive && <div></div>}
    </div>
  );
};

export default Agent;
