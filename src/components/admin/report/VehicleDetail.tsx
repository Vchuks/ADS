import { IoArrowBackOutline } from "react-icons/io5";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import profile from "../../../assets/image/Group 20454.png";
import Map from "../Map";
import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";
import Respondent from "./Respondent";
import TextLink from "../../atom/TextLink";

const VehicleDetail = () => {
  const { setModal } = useContext(MyContext);
  const [side, setSide] = useState(true);
  const [respondent, setRespondent] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row px-5 py-4 gap-4 lg:gap-0 items-center">
      <div className="w-full p-4 rounded-xl border border-[#CBD6D8] bg-white">
        <div className="flex items-center gap-2">
          <IoArrowBackOutline className="text-xl text-tcolor" onClick={()=>window.history.back()}/>
          <Text
            className="text-lg text-tcolor font-semibold"
            body="Vehicle Details"
          />
        </div>
        <div className="w-full flex flex-col gap-2 pt-4  items-center justify-center">
          <div className="w-20 lg:w-24">
            <Image src={profile} alt="" className="w-full" />{" "}
          </div>
          <Text className="text-lg lg:text-2xl font-bold" body="Lexus" />
          <Text
            className="font-bold w-fit bg-[#ffc0bfa6] text-[#CE5347] px-3 py-2 rounded-full"
            body="Accident Detected"
          />
        </div>
        <div className="grid grid-cols-2 mt-3 lg:p-6 justify-between text-tcolor font-sm">
          <Text className="border-b border-[#CBD6D8] py-2" body="Device ID" />
          <Text
            className="border-b text-right border-[#CBD6D8] font-bold py-2"
            body="790162"
          />

          <Text className="border-b border-[#CBD6D8] py-2" body="Device IMEI" />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="68%"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Owner’s Name"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="Ayo Davis Miller"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Owner’s Number"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="+234 012-345-6789"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Owner’s Address"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="Ikeja, Lagos"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Owner’s Email"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="ayomillerdavis09@gmail.com"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Vehicle’s Model & Year"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="2014"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Vehicle’s Plate Number"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="RNV-239-ABJ"
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Vehicle’s Chassis Number"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body="342q297232hw23e"
          />
        </div>
        <TextLink to='/edit_profile' className="" body={<button className="w-full mt-6 lg:mt-0 lg:w-[95%] flex items-center justify-center m-auto rounded-lg font-bold bg-bcolor p-3 lg:p-4 text-white">
          Edit
        </button>} />
      </div>

{/* accident detected */}
     {side && <div className="bg-white w-full">
        <button
          className="text-tcolor flex mb-2 ml-auto border border-tcolor py-1 md:py-2 px-6 rounded font-bold cursor-pointer"
          onClick={() => setModal(true)}
        >
          View History
        </button>
        <div className="lg:px-5 m-auto text-tcolor rounded-3xl bg-white">
          <div className="text-center w-full xl:w-[70%] m-auto">
            <Text className="font-bold lg:text-2xl" body="Accident Detected" />
            <Text
              className="text-xs lg:text-sm pt-2"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
            />
          </div>
          <div className="flex flex-col text-base lg:text-2xl gap-4 py-4 mt-4">
            <div className="flex items-center justify-between">
              <Text className="font-bold" body="Nature Of Request" />
              <Text
                className="font-bold bg-[#ffc0bfa6] text-[#CE5347] p-2 lg:p-4 rounded-lg"
                body="Drowning Vehicle"
              />
            </div>
            <div className="flex items-center  justify-between">
              <Text className="font-bold" body="Time & Date" />
              <Text
                className="font-bold p-2 lg:p-4 text-[#020062]"
                body="23/11/2023 | 14:00"
              />
            </div>
          </div>
          <div className="pb-3">
            <Text
              className="font-semibold text-lg pb-2"
              body="Vehicle Current Location"
            />
            <div className="lg:h-60 xxxl:h-full">
              <Map />
            </div>
          </div>
          <button className="w-full my-2 p-3 lg:p-4 m-auto text-bcolor bg-white rounded-lg border font-bold border-bcolor">
            Call Device
          </button>
          <button className="w-full p-3 my-3 lg:p-4 m-auto text-white rounded-lg font-bold bg-bcolor" onClick={()=>{setRespondent(true); setSide(false)}}>
            Assign To A Respondent
          </button>
        </div>
      </div> }
      {/* respondent */}
      {respondent && <Respondent />}

    </div>
  );
};

export default VehicleDetail;