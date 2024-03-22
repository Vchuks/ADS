import { IoArrowBackOutline } from "react-icons/io5";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import profile from "../../../assets/image/Group 20454.png";
import carlogo from "../../../assets/image/Frame 20511.png";
import Box from "../../atom/Box";
import { useContext, useEffect } from "react";
import { MapContext } from "../../context/MapContext";

type Data = {
  accident_type: string;
  agent_id: number;
  assigned_at: string;
  closed_status: number;
  created_at: string;
  date: string;
  deviceid: string;
  id: number;
  lat: string;
  log: string;
  name: string;
  nature_of_request: string;
  priority: string;
  request_accepted: number;
  responder_id: number;
  time: string;
};
const AgentProfile = () => {
  const { getAgent, result, setGetAgent } = useContext(MapContext);
  
  
  useEffect(() => {
    const fetchAnAgent = () => {
     

      fetch(
        `https://zubitechs.com/ads_apis/api/get_agent_details?id=${result?.id}`,
        {
          method: "GET",
          // headers: tokHead,
        }
      )
        .then((res) => res.json())
        .then((result) => {
        
          setGetAgent(result);
        })
        .catch((err) => console.log(err));
    };
    fetchAnAgent();
  }, [result, setGetAgent]);

  return (
    <div className="flex flex-col lg:flex-row px-5 py-4 gap-4 lg:gap-0 ">
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
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Attended Cases"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.attendedcases?.count}
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Unaccepted Cases"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.agent_unaccepted_logs?.count}
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Pending Cases"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.pendingcases?.count}
          />
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Closed Cases"
          />
          <Text
            className="border-b break-words text-right border-[#CBD6D8] font-bold py-2"
            body={getAgent?.closedcases?.count}
          />
        </div>
       
      </div>
      <div className="bg-white w-full ">
        <div className="flex justify-end gap-4"></div>
        <div className="lg:px-5 m-auto text-tcolor bg-white">
          <Text className="font-semibold text-lg" body="Assigned Task" />
          {/* first screen */}
          <>
            <div className="bg-[#4742FF] rounded-xl p-3 flex flex-col my-4 gap-8">
              <Text className="text-white " body="Total Task Completed" />
              <Text
                className="text-white font-semibold text-lg"
                body={getAgent?.closedcases?.count}
              />
            </div>
            <div className="bg-[#AAA8FF] rounded-xl p-3 flex flex-col my-4 gap-8">
              <Text className=" " body="Total Task In-progress" />
              <Text
                className=" font-semibold text-lg"
                body={getAgent?.pendingcases?.count}
              />
            </div>
          </>

          {/* second screen */}
          <>
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4  py-4 ">
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2 py-4  rounded-lg bg-[#62C554]"
                firstText="Resolved"
                secondText={getAgent?.closedcases?.count}
                firstClass="text-white"
                secondClass="text-white"
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2 py-4  rounded-lg bg-[#FFD1D1]"
                firstText="Rejected"
                secondText={getAgent?.agent_unaccepted_logs?.count}
                firstClass=""
                secondClass=""
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2  py-4  rounded-lg bg-[#FFE5B0]"
                firstText="Pending"
                secondText={getAgent?.pendingcases?.count}
                firstClass=""
                secondClass=""
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2  py-4  rounded-lg bg-[#B3CBFB]"
                firstText="In Progress"
                secondText={getAgent?.attendedcases?.count}
                firstClass=""
                secondClass=""
              />
              {/* <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2  py-4 rounded-lg bg-[#CCFFE7]"
                firstText="In-progress"
                secondText={getAgent?.pendingcases?.count}
                firstClass=""
                secondClass=""
              /> */}
            </div>
          </>
          <div className="lg:h-[370px] xl:h-[400px] 2xl:h-[450px] xxxl:h-auto lg:overflow-y-scroll">
            <div className="border-b py-3 font-sm font-bold border-[#CBD6D8] flex justify-between items-center">
              <Text className="" body="Recent Tasks" />
              <Text className="text-[#1410B4]" body="View All" />
            </div>
            {getAgent?.closedcases?.data?.map((each: Data) => {
              return (
                <div className="flex items-center justify-between py-4 px-2 res-all-box">
                  <div className="flex gap-4 items-center">
                    <Image className="" src={carlogo} alt="" />
                    <div>
                      <Text
                        className="font-bold text-[#75898C]"
                        body={each?.deviceid}
                      />
                      <p className="font-semibold">
                        {each?.nature_of_request}
                        <span className="font-medium">
                          {" "}
                          | {each?.date}, {each?.time}
                        </span>
                      </p>
                    </div>
                  </div>
                  {each.closed_status === 0 ? (
                    <Text className="font-medium text-[#FC0]" body="Pending" />
                  ) : (
                    <Text
                      className="font-medium text-[#06c270]"
                      body="Rescued"
                    />
                  )}
                </div>
              );
            })}
            {getAgent?.attendedcases?.data?.map((each:Data) => {
              return (
                <div className="flex items-center justify-between py-4 px-2 res-all-box">
                  <div className="flex gap-4 items-center">
                    <Image className="" src={carlogo} alt="" />
                    <div>
                      <Text
                        className="font-bold text-[#75898C]"
                        body={each?.deviceid}
                      />
                      <p className="font-semibold">
                        {each?.nature_of_request}
                        <span className="font-medium">
                          {" "}
                          | {each?.date}, {each?.time}
                        </span>
                      </p>
                    </div>
                  </div>
                  {each.closed_status === 0 ? (
                    <Text className="font-medium text-[#FC0]" body="Pending" />
                  ) : (
                    <Text
                      className="font-medium text-[#06c270]"
                      body="Rescued"
                    />
                  )}
                </div>
              );
            })}
            {getAgent?.pendingcases?.data?.map((each: Data) => {
              return (
                <div className="flex items-center justify-between py-4 px-2 res-all-box">
                  <div className="flex gap-4 items-center">
                    <Image className="" src={carlogo} alt="" />
                    <div>
                      <Text
                        className="font-bold text-[#75898C]"
                        body={each?.deviceid}
                      />
                      <p className="font-semibold">
                        {each?.nature_of_request}
                        <span className="font-medium">
                          {" "}
                          | {each?.date}, {each?.time}
                        </span>
                      </p>
                    </div>
                  </div>
                  {each.closed_status === 0 ? (
                    <Text className="font-medium text-[#FC0]" body="Pending" />
                  ) : (
                    <Text
                      className="font-medium text-[#06c270]"
                      body="Rescued"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
