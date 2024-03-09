import { useContext, useEffect, useState } from "react";
import { MapContext } from "../../context/MapContext";

// import { GoDotFill } from "react-icons/go";
// import TextLink from "../../atom/TextLink";

type Data = {
  id: number;
  email: string;
  company_phone_number: string;
  company_address: string;
  company_name: string;
  nature_of_emergency: string;
  company_license: string;
};

const Responder = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [color, setColor] = useState(true);
  const {getResponder, setGetResponder} = useContext(MapContext);
  const [access, setAccess] = useState(false)

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

  const fetchResponder = () => {
    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    const t =`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3p1Yml0ZWNocy5jb20vYWRzX2FwaXMvYXBpL2xvZ2luIiwiaWF0IjoxNzA5OTk2Njg4LCJleHAiOjE3MTAyMTI2ODgsIm5iZiI6MTcwOTk5NjY4OCwianRpIjoiUXJiZDI5YUNRaXkzYU5vdSIsInN1YiI6IjEiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5IiwibmFtZSI6IkFEUyBBZG1pbiIsInJvbGUiOiJhZG1pbiIsImlkIjoxfQ.1wpOeM1rxjCgDJ46zWHVIEBz2CVebh7Y0b_n4umUFnw`
    tokHead.append("Authorization", `Bearer ${t}`);

    fetch("https://zubitechs.com/ads_apis/api/get_responder", {
      method: "GET",
      headers: tokHead,
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.success === false){
          setAccess(result.message)
        }
        console.log(result);
        setGetResponder(result.data);
      })
      .catch((err) => console.log(err));
  };
    fetchResponder();
  }, [setGetResponder]);

  const toEach = (id: number) => {
    console.log(id)
  }
  return (
    <div className="px-5 py-4">
      <div className="w-full md:w-auto flex">
        <button
          className={`w-full md:w-auto md:py-2 md:px-6 font-semibold ${
            color && `text-[#1410B4] border-b-2 border-[#1410B4]`
          }`}
          onClick={handleView}
        >
          All Responder
        </button>
        <button
          className={`w-full md:w-auto md:py-2 md:px-6 font-semibold`}
          onClick={handleView}
        >
          Active Responder
        </button>
        <button
          className={`w-full md:w-auto md:py-2 md:px-6 font-semibold`}
          onClick={handleView}
        >
          Inactive Responder
        </button>
      </div>
      {all && (
          // <TextLink to='details_page' className="" body={
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
      {access && <p className="text-lg">{access}</p>}
      {getResponder?.map((each: Data)=>{
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
          </div> */}
        </div>
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {/* 20 Jobs */}
          </div>
        <div className="w-full border-b py-4 border-[#DDE5E9]">
          {/* May 19, 2020 */}
        </div>
      </div>
      })}

      {/* </div>
          <div className="w-max lg:w-full grid grid-cols-6  bg-white text-[#6E7680]"> */}
      {/*<div className="w-full border-b py-4 border-[#DDE5E9]">Emergency Squad</div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            Ikeja, Lagos
            </div>
            <div className="w-full break-words border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9]">
            +234-012-345-6789
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            20 Jobs
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            May 19, 2020 
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">Emergency Squad</div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            Ikeja, Lagos
            </div>
            <div className="w-full break-words border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9]">
            +234-012-345-6789
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#FF3B3B]" />
                Not on a mission
              </div>
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            20 Jobs
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            May 19, 2020 
            </div>
          </div>*/}
      {active && <div></div>}
      {inActive && <div></div>}
    </div>
  );
};

export default Responder;
