import { useState } from "react"
import { GoDotFill } from "react-icons/go";
import TextLink from "../../atom/TextLink";

const Responder = () => {
    const [all, setAll] = useState(true)
    const [active, setActive] = useState(false)
    const [inActive, setInActive] = useState(false);

    const handleView = () => {
        if(all){
            setActive(false);
            setInActive(false);
        }else if (active){
            setAll(false);
            setInActive(false);
        }else if (inActive){
            setAll(false)
            setActive(false)
        }
    }
  return (
    <div className="px-5 py-4">
      <div className="flex">
        <button className={`py-2 px-6 font-semibold`} onClick={handleView}>All Responder</button>
        <button className={`py-2 px-6 font-semibold`} onClick={handleView}>Active Responder</button>
        <button className={`py-2 px-6 font-semibold`} onClick={handleView}>Inactive Responder</button>
      </div>
      {all && <div>
        <div className="w-max lg:w-full grid grid-cols-6 text-sm  bg-white text-[#6E7680] ">
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
          <TextLink to='details_page' className="" body={<><div className="w-max lg:w-full grid grid-cols-6  bg-white text-[#6E7680]">
            <div className="w-full border-b py-4 border-[#DDE5E9]">Emergency Squad</div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            Ikeja, Lagos
            </div>
            <div className="w-full break-words border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9]">
            +234-012-345-6789
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#06C270]" />
                In a mission
              </div>
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
              <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#06C270]" />
                In a mission
              </div>
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            20 Jobs
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
            May 19, 2020 
            </div>
            
          </div>
          <div className="w-max lg:w-full grid grid-cols-6  bg-white text-[#6E7680]">
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
          </div></>}/>
          </div>}
      {active && <div></div>}
      {inActive && <div></div>}
    </div>
  )
}

export default Responder
