import Search from "../Search";
// import AccidentModal from "./AccidentModal"
import { GoDotFill } from "react-icons/go";
import ActivitySum from "../report/ActivitySum";
import TextLink from "../../atom/TextLink";

const Report = () => {
  return (
    <div>
      <Search />
      <div className="flex flex-col lg:flex-row px-5 py-4 gap-4">
        <div className="overflow-x-scroll md:overflow-auto w-full">
          <div className="w-max lg:w-full grid grid-cols-6 text-sm  bg-white text-[#6E7680] ">
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Device ID
            </div>
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Vehicle Name
            </div>

            <div className="w-full border-b pe-2 lg:pe-0 font-bold py-4 border-[#DDE5E9]">
              Device Number
            </div>
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Heartbeat
            </div>

            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Activity Status
            </div>
            <div className="w-full border-b font-bold py-4 border-[#DDE5E9]">
              Last Acc
            </div>
          </div>
          <TextLink to='details_page' className="" body={
          <div className="w-max lg:w-full grid grid-cols-6 px-5 py-4 bg-white text-[#6E7680]">
            <div className="w-full border-b py-4 border-[#DDE5E9]">790162</div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              Lexus X350
            </div>
            <div className="w-full break-words border-b py-4 pe-2 lg:pe-0 border-[#DDE5E9]">
              1278120832389
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              21/11/23
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              <div className="flex gap-1 items-center bg-[#DAFCEB] text-[#04854D] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#06C270]" />
                Online
              </div>
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              21/11/23
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">790162</div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              Lexus X350
            </div>
            <div className="w-full break-words border-b py-4 border-[#DDE5E9]">
              1278120832389
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              21/11/23
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              <div className="flex gap-1 items-center bg-[#FFF0F0] text-[#C99020] rounded-2xl w-max px-2">
                <GoDotFill className="text-[#FFE5B0]" />
                Offline
              </div>
            </div>
            <div className="w-full border-b py-4 border-[#DDE5E9]">
              21/11/23
            </div>
          </div>} />
        </div>
        <div className="lg:w-[45%]">
          <ActivitySum />
        </div>
      </div>
      {/* <AccidentModal /> */}
    </div>
  );
};

export default Report;
