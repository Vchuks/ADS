import { IoArrowBackOutline } from "react-icons/io5";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import carlogo from "../../../assets/image/Frame 20511.png";
import { useContext } from "react";
import { MapContext } from "../../context/MapContext";

const Respondent = () => {
  const {getResponder} = useContext(MapContext)
  console.log(getResponder)
  return (
    <div className="w-full lg:h-[830px] xl:h-[770px] 2xl:h-[750px] lg:overflow-y-scroll bg-white border rounded-xl border-[#CBD6D8] p-4 ml-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
        <div className="flex items-center gap-2">
          <IoArrowBackOutline className="text-xl text-tcolor" onClick={()=>window.history.back()} />
          <Text
            className="xl:text-lg text-tcolor font-semibold"
            body="Respondent"
          />
        </div>
        <div className="lg:col-start-3 text-xs">
          <label>Sort by</label>
          <select className="w-full border border-tcolor rounded p-2">
            <option className="w-full">Fire Service</option>
          </select>
        </div>
      </div>
      <div className="py-4 mt-2">
        {getResponder?.map((each)=>{
          return <div key={each.id} className="flex items-center justify-between py-3">
          <div className="flex gap-4 items-center">
            <Image className="" src={carlogo} alt="" />
            <div>
              <Text className="font-bold " body={each?.company_name} />
              <p className="font-medium text-sm ">
              {each?.company_name}
                <span className="font-semibold"> | {each?.nature_of_emergency}</span>
              </p>
              <Text className="text-xs" body='25 years Exp. | 15min away' />
            </div>
          </div>
          <Text className="font-semibold text-bcolor text-lg" body="Assign" />
        </div>
        })}
      
        
      </div>
    </div>
  );
};

export default Respondent;
