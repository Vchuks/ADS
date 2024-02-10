// import { useEffect } from "react";
import Swal from "sweetalert2";
import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";

type Data = {
  device_id: string,
  vehicle_name: string,
  device_number: string,
  device_ime: string,
  owner_name: string,
  owner_email: string,
  owner_phone_number: string,
  owner_address: string
  vehicle_model_year: string,
  vehicle_plate_number: string,
  vehicle_chasses_number: string,
}
const CreateDevice = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const token = user?.message[0]?.token;

  const [deviceData, setDeviceData] = useState<Data>({
    device_id: '',
    device_ime: '',
    vehicle_name: '',
    device_number: '',
    owner_name: '',
    owner_email: '',
    owner_phone_number: '',
    owner_address: '',
    vehicle_model_year: '',
    vehicle_plate_number: '',
    vehicle_chasses_number: '',

  })

  const handleChange =(event: React.ChangeEvent<HTMLInputElement>): void=>{
    event.preventDefault();
    const {name, value}  = event.currentTarget
    setDeviceData(prevDt => ({...prevDt, [name]: value}))
  }

  function createDevice() {
    const formdata = new FormData();
    formdata.append("device_id", deviceData?.device_id);
    formdata.append("device_number", deviceData?.device_number );
    formdata.append("device_ime", deviceData?.device_ime);
    formdata.append("owner_name", deviceData?.owner_name);
    formdata.append("owner_phone_number", deviceData?.owner_phone_number);
    formdata.append("owner_email", deviceData?.owner_email);
    formdata.append("owner_address", deviceData?.owner_address);
    formdata.append("vehicle_name", deviceData?.vehicle_name);
    formdata.append("vehicle_plate_number", deviceData?.vehicle_plate_number);
    formdata.append("vehicle_chasses_number", deviceData?.vehicle_chasses_number);
    formdata.append("vehicle_model_year", deviceData?.vehicle_model_year);
    const url = "https://zubitechs.com/ads_apis/api/createdevices";

    const tokenGet = new Headers();
    tokenGet.append("Authorization", `Bearer ${token}`);

    const reqDt = {
      method: "POST",
      headers: tokenGet,
      body: formdata,
    };

    fetch(url, reqDt)
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'created'){
          Swal.fire({
            icon: 'success',
            text: result.message,
            confirmButtonText: 'Ok'
          })
        }else  Swal.fire({
          icon: 'error',
          text: result.message,
          confirmButtonText: 'Ok',
          confirmButtonColor: "#9f2727",
        })
      })
      .catch((error) => console.log(error));
  }

  console.log(deviceData)
  return (
    <div className="px-5 py-4">
      <IoArrowBackOutline
        className=" text-xl text-tcolor"
        onClick={() => window.history.back()}
      />
      <div className="md:w-[80%] xl:w-2/4 m-auto py-4">
        <Text
          className="lg:text-2xl pb-1 font-bold text-tcolor text-center"
          body="Create New Device"
        />
        <Text
          className="text-center text-tcolor text-sm"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        />
      </div>
      {/* device */}
      <div className="text-tcolor font-bold py-2 lg:pb-8 lg:px-4">
        <Text className="font-semibold text-lg py-1" body="Device Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <label>Device ID</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='device_id'
                value={deviceData?.device_id}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Device Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='device_number'
                value={deviceData?.device_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Device IMEI</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='device_ime'
                value={deviceData?.device_ime}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* owner */}
      <div className="text-tcolor font-bold py-2 lg:pb-8 lg:px-4">
        <Text className="font-semibold text-lg py-1" body="Owner's Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <label>Owner's Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='owner_name'
                value={deviceData?.owner_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Owner's Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='owner_phone_number'
                value={deviceData?.owner_phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Owner's Email Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='owner_email'
                value={deviceData?.owner_email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Owner's Home Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='owner_address'
                value={deviceData?.owner_address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* vehicle info */}
      <div className="text-tcolor font-bold py-2 lg:pb-8 lg:px-4">
        <Text className="font-semibold text-lg py-1" body="Vehicle Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <label>Vehicle's Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='vehicle_name'
                value={deviceData?.vehicle_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Vehicle's Model & Year</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='vehicle_model_year'
                value={deviceData?.vehicle_model_year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Vehicle's Plate Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='vehicle_plate_number'
                value={deviceData?.vehicle_plate_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Vehicle's Chassis Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name='vehicle_chasses_number'
                value={deviceData?.vehicle_chasses_number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="font-bold bg-bcolor rounded-lg w-[70%] lg:w-[50%] xxxl:w-[40%] flex m-auto justify-center my-6 text-white p-3 lg:p-4"
        onClick={createDevice}
      >
        Create
      </button>
    </div>
  );
};

export default CreateDevice;
