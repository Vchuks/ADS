import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";

const EditProfile = () => {
  return (
    <div className="px-5 py-4">
        <IoArrowBackOutline className="lg:hidden text-xl text-tcolor" onClick={()=>window.history.back()} />
      <div className="md:w-[80%] xl:w-2/4 m-auto py-4">
        <Text
          className="lg:text-2xl pb-1 font-bold text-tcolor text-center"
          body="Edit Profile"
        />
        <Text
          className="text-center text-tcolor text-sm"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        />
      </div>
      {/* device */}
      <div className="text-tcolor font-bold py-2 lg:px-4">
        <Text className="font-semibold text-lg py-1" body="Device Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <label>Device ID</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Device Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Device IMEI</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
        </div>
      </div>
      {/* owner */}
      <div className="text-tcolor font-bold py-2 lg:px-4">
        <Text className="font-semibold text-lg py-1" body="Owner's Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <label>Owner's Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Owner's Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Owner's Email Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Owner's Home Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
        </div>
      </div>
      {/* vehicle info */}
      <div className="text-tcolor font-bold py-2 lg:px-4">
        <Text className="font-semibold text-lg py-1" body="Vehicle Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <label>Vehicle's Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Vehicle's Model & Year</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Vehicle's Plate Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Vehicle's Chassis Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="font-bold bg-bcolor rounded-lg w-[70%] lg:w-[50%] xxxl:w-[40%] flex m-auto justify-center my-6 text-white p-3 lg:p-4">Save Update</button>
    </div>
  );
};

export default EditProfile;
