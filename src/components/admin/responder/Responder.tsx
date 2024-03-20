import { useContext, useEffect, useState } from "react";
import { MapContext } from "../../context/MapContext";
import { Link } from "react-router-dom";
import { BiLoaderCircle } from "react-icons/bi";

// import { GoDotFill } from "react-icons/go";
// import TextLink from "../../atom/TextLink";

// type Data = {
//   id: number | string;
//   email: string;
//   company_phone_number: string;
//   company_address: string;
//   company_name: string;
//   nature_of_emergency: string;
//   company_license: string;
// };

const Responder = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [color, setColor] = useState(true);
  const { getResponder, setGetResponder, setEachResponder } =
    useContext(MapContext);
  const [access, setAccess] = useState(false);
  const [type,setType] = useState<string>('')

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

    const fetchResponder = () => {
      const getToken = JSON.parse(localStorage.getItem("user") || "");
setType(getToken.message[0].type)
      const tokHead = new Headers();
      tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);
  

      fetch("https://zubitechs.com/ads_apis/api/get_responder", {
        method: "GET",
        headers: tokHead,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success === false) {
            setAccess(result.message);
          }
          
          setGetResponder(result.data);
        })
        .catch((err) => console.log(err));
    };
  useEffect(() => {

    fetchResponder();
  },[]);
  

  return (<>
      {getResponder.length <= 0 && <div className="h-full lg:h-screen bg-[#232323ab] z-20 border w-full top-0 absolute">
            <p className=" w-2/4 flex h-3/4 lg:h-full  justify-center items-center  m-auto">
              <BiLoaderCircle className=" animate-spin  text-bg text-5xl" />
            </p>
          </div>}
    <div className="px-5 py-4">
      <div className="w-full md:w-auto flex ">
        <button
          className={`w-full md:w-auto md:py-2 md:px-6 font-semibold ${
            color && `text-[#1410B4] border-b-2 border-[#1410B4]`
          }`}
          onClick={handleView}
        >
          All Responder
        </button>
        {/* <button
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
        </button> */}
      </div>
      <div className="flex flex-col lg:flex-row py-4 gap-4 relative">
        <div className="overflow-x-scroll lg:overflow-auto w-full absolute">
          {all && (
            // <TextLink to='details_page' className="" body={
            
              <div className="w-max lg:w-full flex lg:justify-between text-sm border-b border-[#DDE5E9] bg-white text-[#6E7680] ">
                <div className="w-[150px] lg:px-2  font-bold py-4  ">
                  Respondent Team Name
                </div>
                <div className="w-[150px] lg:px-2  font-bold py-4 ">
                  Respondent Address
                </div>

                <div className="w-[150px] lg:px-2  pe-2 lg:pe-0 font-bold py-4 ">
                  Phone Number
                </div>
                <div className="w-[150px] lg:px-2 break-words  font-bold py-4 ">
                  Email
                </div>

                <div className="w-[150px] lg:px-2 break-words  font-bold py-4 ">
                  License
                </div>
                <div className="w-[150px] lg:px-2 break-words   font-bold py-4 ">
                  Nature of Emergency
                </div>
              </div>
            
          )}
          {access && <p className="text-lg">{access}</p>}

          {type ==='admin' && getResponder?.map((each) => {
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
                  onClick={() => setEachResponder(each)}
                  className="w-max lg:w-full flex lg:justify-between border-b border-[#DDE5E9] text-[#6E7680]"
                >
                  <div className="w-[150px] lg:px-2 break-words   py-4 ">
                    {each?.company_name}
                  </div>
                  <div className="w-[150px] lg:px-2 break-words   py-4 ">
                    {each?.company_address}
                  </div>
                  <div className="w-[150px] lg:px-2 break-words  py-4 pe-2 lg:pe-0 ">
                    {each?.company_phone_number}
                  </div>
                  {/* <div className="w-[150px] lg:w-full  py-4 ">
                     <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max lg:px-2">
            <GoDotFill className="text-[#06C270]" />
            In a mission
          </div>
          <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max px-2">
            <GoDotFill className="text-[#FF3B3B]" />
            Not on a mission
          </div> 
                  </div> */}
                  <div className="w-[150px] px-2 break-words  py-4 ">
                    {each?.email}
                  </div>
                  <div className="w-[150px] px-2 break-words   py-4 ">
                    {each?.company_license}
                  </div>
                  <div className="w-[150px] px-2 break-words   py-4 ">
                    {each?.nature_of_emergency}
                  </div>
                </div>
              </Link>
            );
          })}
          {type === 'agent' && getResponder?.map((each) => {
            return (
              
                <div
                  key={each.id}
                  onClick={() => setEachResponder(each)}
                  className="w-max lg:w-full flex lg:justify-between border-b border-[#DDE5E9] text-[#6E7680]"
                >
                  <div className="w-[150px] lg:px-2 break-words   py-4 ">
                    {each?.company_name}
                  </div>
                  <div className="w-[150px] lg:px-2 break-words   py-4 ">
                    {each?.company_address}
                  </div>
                  <div className="w-[150px] lg:px-2 break-words  py-4 pe-2 lg:pe-0 ">
                    {each?.company_phone_number}
                  </div>
                  {/* <div className="w-[150px] lg:w-full  py-4 ">
                     <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max lg:px-2">
            <GoDotFill className="text-[#06C270]" />
            In a mission
          </div>
          <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max px-2">
            <GoDotFill className="text-[#FF3B3B]" />
            Not on a mission
          </div> 
                  </div> */}
                  <div className="w-[150px] px-2 break-words  py-4 ">
                    {each?.email}
                  </div>
                  <div className="w-[150px] px-2 break-words   py-4 ">
                    {each?.company_license}
                  </div>
                  <div className="w-[150px] px-2 break-words   py-4 ">
                    {each?.nature_of_emergency}
                  </div>
                </div>
             
            );
          })}
        </div>
      </div>
      {/* </div>
          <div className="w-max lg:w-full grid grid-cols-6  bg-white text-[#6E7680]"> */}
      {/*<div className="w-full  py-4 ">Emergency Squad</div>
            <div className="w-full  py-4 ">
            Ikeja, Lagos
            </div>
            <div className="w-full break-words  py-4 pe-2 lg:pe-0 ">
            +234-012-345-6789
            </div>
            <div className="w-full  py-4 ">
              
            </div>
            <div className="w-full  py-4 ">
            20 Jobs
            </div>
            <div className="w-full  py-4 ">
            May 19, 2020 
            </div>
            <div className="w-full  py-4 ">Emergency Squad</div>
            <div className="w-full  py-4 ">
            Ikeja, Lagos
            </div>
            <div className="w-full break-words  py-4 pe-2 lg:pe-0 ">
            +234-012-345-6789
            </div>
            <div className="w-full  py-4 ">
              <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C12126] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#FF3B3B]" />
                Not on a mission
              </div>
            </div>
            <div className="w-full  py-4 ">
            20 Jobs
            </div>
            <div className="w-full  py-4 ">
            May 19, 2020 
            </div>
          </div>*/}
      {active && <div></div>}
      {inActive && <div></div>}
    </div>
    </>
  );
};

export default Responder;
