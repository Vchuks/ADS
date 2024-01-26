import Image from "../../atom/Image";
import Text from "../../atom/Text";
import carlogo from "../../../assets/image/Frame 20511.png";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const HistoryModal = () => {
    const {modal, setModal} = useContext(MyContext)
    const closeModal = () =>{
        setModal(false);
    }
  return (<>
    {modal && <div className="bg-[#232323ab] fixed top-0  xl:w-[85dvw] 2xl:w-[87dvw] xxxl:w-[92dvw]  h-full flex items-center">
      <div className="w-[90%] lg:w-[60%] p-4 lg:p-6 h-[90%] overflow-y-scroll m-auto text-tcolor rounded-3xl bg-white">
        <div className="text-center w-full  m-auto">
            <FaTimes className='flex ml-auto cursor-pointer text-xl' onClick={closeModal} />
          <Text className="font-bold lg:text-2xl pb-2" body="History" />
          <Text
            className="text-sm lg:text-base"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
        </div>
        <div className="flex flex-col gap-4 text-sm lg:gap-8 lg:p-4 mt-4">
            <Text className="text-tcolor lg:text-lg font-semibold" body='Last-week 15/11/2023'/>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Image className="" src={carlogo} alt="" />
              <div>
                <Text
                  className="font-bold text-[#75898C]"
                  body="Yusuf Adebayo"
                />
                <p className="font-semibold">
                  SOS Emergency<span className="font-medium"> | 21 Nov, 10:00</span>
                </p>
              </div>
            </div>
            <Text className="font-medium text-[#62C554]" body="Resolved" />
          </div>
          
        </div>
      </div>
    </div>}
    </>
  );
};

export default HistoryModal;
