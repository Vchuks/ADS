import { IoArrowBackOutline } from "react-icons/io5";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import profile from "../../../assets/image/Group 20454.png";
// import carlogo from "../../../assets/image/Frame 20511.png";
import { useContext, useState } from "react";
import { MapContext } from "../../context/MapContext";
import Box from '../../../components/atom/Box'


const ViewDetailAgent = () => {
  const loginDetails = JSON.parse(localStorage.getItem("user") || "");
  const [userData] = useState(loginDetails);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const {eachAgent} = useContext(MapContext)
  

  const disableButton = () => {
    if (
      userData?.message[0]?.type === "responder" ||
      userData?.message[0]?.type === "agent"
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
      location.href = "#";
    }
  };
console.log(eachAgent)
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
          <Text className="text-lg lg:text-2xl font-bold" body={eachAgent?.agent_details?.name} />
          {eachAgent?.agent_details?.status === 'online' ?<Text
            className="font-bold w-fit bg-[#DAFCEB] text-[#04854D] px-3 py-2 rounded-full"
            body={eachAgent?.agent_details?.status}
          />:
          <Text
            className="font-bold w-fit bg-[#FFF0F0] text-[#C12126] px-3 py-2 rounded-full"
            body={eachAgent?.agent_details?.status}
          />}
        </div>
        <div className="grid grid-cols-2 mt-3 lg:p-6 justify-between text-tcolor font-sm">
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Agent Name"
          />
          <Text
            className="border-b text-right border-[#CBD6D8] font-bold py-2"
            body={eachAgent?.agent_details?.name}
          />
        </div>
        <div className="grid grid-cols-2 lg:p-6 justify-between text-tcolor font-sm">
          <Text
            className="border-b border-[#CBD6D8] py-2"
            body="Agent Phone Number"
          />
          <Text
            className="border-b text-right border-[#CBD6D8] font-bold py-2"
            body={eachAgent?.agent_details?.phone_number}
          />
        </div>
        <div className="grid grid-cols-2 lg:p-6 justify-between text-tcolor font-sm">
          <Text className="border-b border-[#CBD6D8] py-2" body="Joined Date" />
          <Text
            className="border-b text-right border-[#CBD6D8] font-bold py-2"
            body=''
          />
        </div>
        <p className="w-full mt-6 lg:mt-0 lg:w-[95%] flex items-center justify-center m-auto rounded-lg font-bold p-3 lg:p-4 text-[#04854D]">
          Email Verified
        </p>
        <Text
          className="border-b border-[#CBD6D8] font-bold py-2"
          body={eachAgent?.agent_details?.email}
        />
        <Text
          className="border-b py-2"
          body={eachAgent?.agent_details?.company_address}
        />
      </div>

      {/* assigned task */}
      <div className="bg-white w-full ">
        <div className="flex justify-end gap-4 pb-4 ">
          <button className="text-tcolor flex mb-2  border border-tcolor py-1 md:py-2 px-6 rounded font-bold cursor-pointer">
            View All Assigned Task
          </button>
          <button className="text-[#A5640C] flex mb-2  border border-[#A5640C] py-1 md:py-2 px-6 rounded font-bold cursor-pointer"
          disabled={isButtonDisabled}
          onClick={disableButton}>
            Suspend Respondent
          </button>
        </div>
        <div className="lg:px-5 m-auto text-tcolor bg-white">
          <Text className="font-semibold text-lg" body="Assigned Task" />
          {/* first screen */}
          <>
            <div className="bg-[#4742FF] rounded-xl p-3 flex flex-col my-4 gap-8">
              <Text className="text-white " body="Total Task Completed" />
              <Text className="text-white font-semibold text-lg" body="100" />
            </div>
            <div className="bg-[#AAA8FF] rounded-xl p-3 flex flex-col my-4 gap-8">
              <Text className=" " body="Total Task In-progress" />
              <Text className=" font-semibold text-lg" body="100" />
            </div>
          </>

          {/* second screen */}
          <>
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4  py-4 ">
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2 py-4  rounded-lg bg-[#62C554]"
                firstText="Resolved"
                secondText={eachAgent?.closedcases?.count}
                firstClass="text-white"
                secondClass="text-white"
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2 py-4  rounded-lg bg-[#FFD1D1]"
                firstText="Rejected"
                secondText={eachAgent?.agent_unaccepted_logs?.count}
                
                firstClass=""
                secondClass=""
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2  py-4  rounded-lg bg-[#FFE5B0]"
                firstText="Pending"
                secondText={eachAgent?.pendingcases?.count}
               
                firstClass=""
                secondClass=""
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2  py-4  rounded-lg bg-[#B3CBFB]"
                firstText="Accepted"
               
                secondText={eachAgent?.attendedcases?.count}
                    
                
                firstClass=""
                secondClass=""
              />
              <Box
                mainClass="w-full border hover:border-bcolor cursor-pointer text-center px-2  py-4 rounded-lg bg-[#CCFFE7]"
                firstText="In-progress"
                secondText=""
                firstClass=""
                secondClass=""
              />
            </div>
          </>
          {/* <div className="lg:h-[370px] xl:h-[400px] 2xl:h-[450px] xxxl:h-auto lg:overflow-y-scroll">
            <div className="border-b py-3 font-sm font-bold border-[#CBD6D8] flex justify-between items-center">
              <Text className="" body="Recent Tasks" />
              <Text className="text-[#1410B4]" body="View All" />
            </div>
            <div className="flex items-center justify-between py-4 px-2 res-all-box">
              <div className="flex gap-4 items-center">
                <Image className="" src={carlogo} alt="" />
                <div>
                  <Text
                    className="font-bold text-[#75898C]"
                    body="Yusuf Adebayo"
                  />
                  <p className="font-semibold">
                    SOS Emergency
                    <span className="font-medium"> | 21 Nov, 10:00</span>
                  </p>
                </div>
              </div>
              <Text className="font-medium text-[#FC0]" body="Pending" />
            </div>
            <div className="flex items-center justify-between py-4 px-2 res-all-box">
              <div className="flex gap-4 items-center">
                <Image className="" src={carlogo} alt="" />
                <div>
                  <Text
                    className="font-bold text-[#75898C]"
                    body="Yusuf Adebayo"
                  />
                  <p className="font-semibold">
                    SOS Emergency
                    <span className="font-medium"> | 21 Nov, 10:00</span>
                  </p>
                </div>
              </div>
              <Text className="font-medium text-[#FC0]" body="Pending" />
            </div>
            <div className="flex items-center justify-between py-4 px-2 res-all-box">
              <div className="flex gap-4 items-center">
                <Image className="" src={carlogo} alt="" />
                <div>
                  <Text
                    className="font-bold text-[#75898C]"
                    body="Yusuf Adebayo"
                  />
                  <p className="font-semibold">
                    SOS Emergency
                    <span className="font-medium"> | 21 Nov, 10:00</span>
                  </p>
                </div>
              </div>
              <Text className="font-medium text-[#06C270]" body="Rescued" />
            </div>
            <div className="flex items-center justify-between py-4 px-2 res-all-box">
              <div className="flex gap-4 items-center">
                <Image className="" src={carlogo} alt="" />
                <div>
                  <Text
                    className="font-bold text-[#75898C]"
                    body="Yusuf Adebayo"
                  />
                  <p className="font-semibold">
                    SOS Emergency
                    <span className="font-medium"> | 21 Nov, 10:00</span>
                  </p>
                </div>
              </div>
              <Text className="font-medium text-[#FC0]" body="Pending" />
            </div>
            <div className="flex items-center justify-between py-4 px-2 res-all-box">
              <div className="flex gap-4 items-center">
                <Image className="" src={carlogo} alt="" />
                <div>
                  <Text
                    className="font-bold text-[#75898C]"
                    body="Yusuf Adebayo"
                  />
                  <p className="font-semibold">
                    SOS Emergency
                    <span className="font-medium"> | 21 Nov, 10:00</span>
                  </p>
                </div>
              </div>
              <Text className="font-medium text-[#06C270]" body="Rescued" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailAgent;
