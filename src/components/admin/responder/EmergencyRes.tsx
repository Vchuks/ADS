import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";

const EmergencyRes = () => {
  return (
    <div className="px-5 py-4">
        <IoArrowBackOutline className="lg:hidden text-xl text-tcolor" onClick={()=>window.history.back()} />
      <div className="md:w-[80%] xl:w-2/4 m-auto py-4">
        <Text
          className="lg:text-2xl pb-1 font-bold text-tcolor text-center"
          body="Create Emergency Responder "
        />
        <Text
          className="text-center text-tcolor text-sm"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        />
      </div>
      {/* device */}
      <div className="text-tcolor font-bold py-2 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-3 lg:gap-y-6">
          <div className="w-full">
            <div>
              <label>Company’s Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s License Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s Official Number and Email Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Nature of Emergency i.e <span className="text-xs">Hospital, Fire Service, Police</span></label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button className="font-bold bg-bcolor rounded-lg w-[100%] md:w-[70%] lg:w-[50%] xxxl:w-[40%] flex m-auto justify-center my-6 text-white p-3 lg:p-4">Create Emergency Responder</button>
    </div>
  );
};

export default EmergencyRes;
