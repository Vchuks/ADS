import { useState, useEffect, useContext } from "react";
import AgentProfile from "./AgentProfile";
import { MapContext } from "../../context/MapContext";
// import { GoDotFill } from "react-icons/go";
// import TextLink from "../../atom/TextLink";

// type Data = {
//   id: number;
//   email: string;
//   company_phone_number: string;
//   company_address: string;
//   company_name: string;
//   nature_of_emergency: string;
//   company_license: string;
// };

const Agent = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [color, setColor] = useState(true);
const [access, setAccess] = useState(false)

const {setGetAgent} = useContext(MapContext);

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

    fetch("https://zubitechs.com/ads_apis/api/get_agent_details", {
      method: "GET",
      headers: tokHead,
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.message === 'An error occured'){
          setAccess(true)
        }
        console.log(result);
        setGetAgent(result);
      })
      .catch((err) => console.log(err));
  };
    fetchAgent();
  }, [setGetAgent]);

  // const toEach = (id: number) => {
  //   console.log(id)
  // }
  return (
    <div className="px-5 py-4">
      {access &&<div className="w-full md:w-auto flex">
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
      </div>}

      {all && access && (
        <div className="overflow-x-scroll md:overflow-auto w-full">
          <div className="w-max lg:w-full flex text-sm  bg-white text-[#6E7680] ">
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Respondent Team Name
            </div>
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Respondent Address
            </div>

            <div className="w-full border-b pe-2 lg:pe-0 font-bold py-4 border-[#DDE5E9]">
              Phone Number
            </div>
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Status
            </div>

            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Accepted Tasks
            </div>
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Started Date
            </div>
          </div>
        </div>
      )}
      {access && <p className="text-lg">Not Allowed to view!</p>}
      {!access && <AgentProfile/>}
      {/* {getAgent?.map((each: Data)=>{
        return <div key={each.id} onClick={()=>toEach(each.id)} className="w-max lg:w-full flex bg-white text-[#6E7680]">
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {each?.company_name}
        </div>
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {each?.company_address}
        </div>
        <div className="w-full break-words border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9]">
          {each?.company_phone_number}
        </div>
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {/* <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
            <GoDotFill className="text-[#06C270]" />
            In a mission
          </div>
          <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max px-2">
            <GoDotFill className="text-[#FF3B3B]" />
            Not on a mission
          </div> 
        </div>
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {/* 20 Jobs *
          </div>
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {/* May 19, 2020 *
        </div>
      </div>
      })} 
    */}
      {active && <div></div>}
      {inActive && <div></div>}
    </div>
  );
};

export default Agent;
