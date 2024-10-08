import Image from "../../atom/Image";
import Text from "../../atom/Text";
import carlogo from "../../../assets/image/Frame 20511.png";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { MapContext } from "../../context/MapContext";

type Data = {
  accident_type: "Collision";
  agent_id: 3;
  assigned_at: "";
  closed_status: 0;
  created_at: "2024-02-11 09:35:54";
  date: "2000-0-0";
  deviceid: "ADS 004";

  lat: "";
  log: "";
  name: "";
  nature_of_request: "";
  priority: "";
  request_accepted: "";
  responder_id: "";
  time: "";
  id: number;
  device_id: string;
  vehicle_name: string;
  device_number: string;
  status: string;
  last_accident_detected: string;
  last_sos_detected: string;
  owner_name: string;
  owner_phone_number: string;
  owner_address: string;
};

const HistoryModal = () => {
  const { devicereport } = useContext(MapContext);
  const { modal, setModal } = useContext(MyContext);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <div className="bg-[#232323ab] fixed top-0 z-10  xl:w-[85dvw] 2xl:w-[87dvw] xxxl:w-[92dvw]  h-full flex items-center">
          <div className="w-[90%] lg:w-[60%] p-4 lg:p-6 h-[80%] overflow-y-scroll m-auto text-tcolor rounded-3xl bg-white">
            <div className="text-center w-full  m-auto">
              <FaTimes
                className="flex ml-auto cursor-pointer text-xl"
                onClick={closeModal}
              />
              <Text className="font-bold lg:text-2xl pb-2" body="History" />
              <Text
                className="text-sm lg:text-base"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
              />
            </div>
            <div className="flex flex-col gap-4 text-sm lg:gap-8 lg:p-4 mt-4">
              {/* <Text className="text-tcolor lg:text-lg font-semibold" body='Last-week 15/11/2023'/> */}
              {devicereport?.accident_history.length == 0 ? (
                <p className="text-tcolor lg:text-lg font-semibold">
                  No History!
                </p>
              ) : (
                devicereport?.accident_history.map((each: Data) => {
                  return (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 items-center">
                        <Image className="" src={carlogo} alt="" />
                        <div>
                          <Text
                            className="font-bold text-[#75898C]"
                            body={each?.name}
                          />
                          <p className="font-semibold">
                            {each?.nature_of_request}
                            <span className="font-medium">
                              {" "}
                              | <span>{each?.created_at}</span>
                            </span>
                          </p>
                        </div>
                      </div>
                      <Text
                        className="font-medium text-[#62C554]"
                        body="Resolved"
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryModal;
