import { IoArrowBackOutline } from "react-icons/io5";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import profile from "../../../assets/image/Group 20454.png";

import { useContext } from "react";

import { MapContext } from "../../context/MapContext";

const AgentProfile = () => {
  const { getAgent } = useContext(MapContext);
 


  return (
    <div className="flex flex-col lg:flex-row px-5 py-4 gap-4 lg:gap-0 items-center">
      <div className="w-full p-4 rounded-xl border border-[#CBD6D8] bg-white">
        <div className="flex items-center gap-2">
          <IoArrowBackOutline
            className="text-xl text-tcolor"
            onClick={() => window.history.back()}
          />
          <Text
            className="text-lg text-tcolor font-semibold"
            body="Agent Details"
          />
        </div>
        <div className="w-full flex flex-col gap-2 pt-4  items-center justify-center">
          <div className="w-20 lg:w-24">
            <Image src={profile} alt="" className="w-full" />{" "}
          </div>
          <Text
            className="text-lg lg:text-2xl font-bold"
            body={getAgent?.agent_details?.name}
          />
        </div>
        <div className="grid grid-cols-2 mt-3 lg:p-6 justify-between text-tcolor font-sm">
          <Text className="border-b border-[#CBD6D8] py-2" body="Email" />
          <Text
            className="border-b text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.agent_details?.email}
          />

          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Phone Number"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.agent_details?.phone_number}
          />
          <Text className="border-b border-[#CBD6D8] py-2" body="Status" />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.agent_details?.status}
          />
          <Text className="border-b border-[#CBD6D8] py-2" body="Attended Cases" />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.attendedcases?.count}
          />
          <Text className="border-b border-[#CBD6D8] py-2" body="Unaccepted Cases" />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.agent_unaccepted_logs?.count}
          />
          <Text className="border-b border-[#CBD6D8] py-2" body="Pending Cases" />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.pendingcases?.count}
          />
          <Text className="border-b border-[#CBD6D8] py-2" body="Closed Cases" />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.closedcases?.count}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
