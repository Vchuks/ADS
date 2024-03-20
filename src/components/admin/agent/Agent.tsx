import { useState, useEffect, useContext } from "react";
import AgentProfile from "./AgentProfile";
import { MapContext } from "../../context/MapContext";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiLoaderCircle } from "react-icons/bi";

// import TextLink from "../../atom/TextLink";

type Data = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  status: string;
  account_disabled: number
};

const Agent = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [color, setColor] = useState(true);
  const [access, setAccess] = useState(true);
  const [profile, setProfile] = useState(false);

  const { setGetAllAgents, getAllAgents, setEachAgent } = useContext(MapContext);
  const [type, setType] = useState('')
  const [loading, setLoading] = useState<string>()

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
            setLoading('')

      const getToken = JSON.parse(localStorage.getItem("user") || "");
setType(getToken.message[0].type)
      const tokHead = new Headers();
      tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

      fetch("https://zubitechs.com/ads_apis/api/get_agents", {
        method: "GET",
        headers: tokHead,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success === false) {
            setLoading('')
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
  
  const handleEach =(id:number | string)=>{
    const getToken = JSON.parse(localStorage.getItem("user") || "");
    setLoading('Loading...')

      const tokHead = new Headers();
      tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
    fetch(`https://zubitechs.com/ads_apis/api/get_agent_details?id=${id}`,
    {
      method: 'GET',
      headers: tokHead
    })
    .then((res)=> res.json())
    .then((result) => {console.log(result)
      setLoading('')

    setEachAgent(result)})
    .catch(err => console.log(err))
  }

  return (<>
  {(type === 'admin' && getAllAgents?.data.length <= 0) && <div className="h-full lg:h-screen bg-[#232323ab] z-20 border w-full top-0 absolute">
            <p className=" w-2/4 flex h-3/4 lg:h-full  justify-center items-center  m-auto">
              <BiLoaderCircle className=" animate-spin  text-bg text-5xl" />
            </p>
          </div>}
    <div className="px-5 py-4">
    {loading && <p>{loading}</p>}

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
            {/* <button
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
            </button> */}
          </div>
          <div className="flex flex-col lg:flex-row py-4 gap-4 relative">
            <div className="overflow-x-scroll lg:px-4 lg:overflow-auto absolute  w-full">
              
              {all && (
                <>
                  
                    <div className="w-max lg:w-full flex lg:justify-between  text-sm border-b border-[#DDE5E9] bg-white text-[#6E7680] ">
                      <div className="w-[150px]  font-bold py-4 lg:px-2 ">
                        Agent Name
                      </div>
                      <div className="w-[150px]   font-bold py-4 lg:px-2 ">
                        Agent Email
                      </div>

                      <div className="w-[150px]  font-bold lg:px-2 py-4 ">
                        Phone Number
                      </div>
                      <div className="w-[150px]  font-bold py-4 lg:px-2 ">
                        Status
                      </div>

                      <div className="w-[150px]   font-bold py-4 lg:px-2 ">
                        Disabled Status
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
                        className=" w-max lg:w-full flex lg:justify-between bg-white border-b border-[#DDE5E9]  text-[#6E7680]"
                      >
                        <div className="w-[150px]  break-words  py-4 lg:px-2 ">
                          {each?.name}
                        </div>
                        <div className="w-[150px]  break-words  py-4 lg:px-2 ">
                          {each?.email}
                        </div>
                        <div className="w-[150px]  break-words  py-4 lg:px-2 lg:pe- ">
                          {each?.phone_number}
                        </div>
                        <div className="w-[150px]  break-words  py-4 lg:px-2 ">
                          
                          {each?.status === "online" ? (
                            <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max lg:px-2">
                              <GoDotFill className="text-[#06C270]" />
                              Online
                            </div>
                          ) : (
                            <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max lg:px-2">
                              <GoDotFill className="text-[#FF3B3B]" />
                              Offline
                            </div>
                          )}
                        </div>
                        <div className="w-[150px]  break-words  py-4 lg:px-2 ">
                          {each?.account_disabled === 0 ? 'Disabled' : 'Enabled' }
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
    </>
  );
};

export default Agent;
