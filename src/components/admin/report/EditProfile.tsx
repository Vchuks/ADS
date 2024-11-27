import { useContext, useState } from "react";
import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { MapContext } from "../../context/MapContext";
import { BiLoaderCircle } from "react-icons/bi";
import { MyContext } from "../../context/MyContext";


// type Data = {
//   id: number,
//   device_id: string,
//   vehicle_name: string,
//   device_number: string,
//   device_ime: string,
//   owner_name: string,
//   owner_email: string,
//   owner_phone_number: string,
//   owner_address: string
//   vehicle_model_year: string,
//   vehicle_plate_number: string,
//   vehicle_chasses_number: string,
// }


const EditProfile = () => {
  const {devicereport} = useContext(MapContext)
  const {baseUrl} = useContext(MyContext)
  const user = JSON.parse(localStorage.getItem("user") || "");
  const token = user?.message[0]?.token;

  const [deviceData, setDeviceData] = useState({
    id: devicereport?.devicedetails?.id,
    device_id: devicereport?.devicedetails?.device_id,
    device_ime: devicereport?.devicedetails?.device_ime,
    vehicle_name: devicereport?.devicedetails?.vehicle_name,
    device_number: devicereport?.devicedetails?.device_number,
    owner_name: devicereport?.devicedetails?.owner_name,
    owner_email: devicereport?.devicedetails?.owner_email,
    owner_phone_number: devicereport?.devicedetails?.owner_phone_number,
    owner_address: devicereport?.devicedetails?.owner_address,
    vehicle_model_year: devicereport?.devicedetails?.vehicle_model_year,
    vehicle_plate_number: devicereport?.devicedetails?.vehicle_plate_number,
    vehicle_chasses_number: devicereport?.devicedetails?.vehicle_chasses_number,

  })

  const handleChange =(event: React.ChangeEvent<HTMLInputElement>): void=>{
    
    const {name, value}  = event.currentTarget
    setDeviceData(prevDt => ({...prevDt, [name]: value}))
  }

  function handleUpdate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const spin = document.getElementById("loader") as HTMLElement;
    spin.style.display = "block";
    const formdata = new FormData();
    formdata.append("id", deviceData?.id);
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

    const url = `${baseUrl}/ads_apis/api/updatedevices`;

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
        console.log(result)
       
          Swal.fire({
            icon: 'success',
            text: result.message,
            confirmButtonText: 'Ok'
          })
    spin.style.display = "none";
        
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          text: 'Error!',
          confirmButtonText: 'Ok',
          confirmButtonColor: "#9f2727",
        })
    spin.style.display = "none";

      });
  }

  return (
    <div className="px-5 py-4">
        <IoArrowBackOutline className="text-xl text-tcolor" onClick={()=>window.history.back()} />
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
      <button onClick={handleUpdate} className="font-bold bg-bcolor rounded-lg w-[70%] lg:w-[50%] xxxl:w-[40%] flex m-auto justify-center my-6 text-white p-3 lg:p-4">
      <span className="animate-spin text-2xl" id="loader">
                  <BiLoaderCircle className="text-white" />
                </span>{" "}
        Save Update</button>
    </div>
  );
};

export default EditProfile;
