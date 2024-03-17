import { useContext, useState } from "react";
import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { MapContext } from "../../context/MapContext";
import { BiLoaderCircle } from "react-icons/bi";


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


const EditResponder = () => {
  const {eachResponder} = useContext(MapContext)
  const user = JSON.parse(localStorage.getItem("user") || "");
  const token = user?.message[0]?.token;

  const [deviceData, setDeviceData] = useState({
    id: eachResponder?.id,
    company_name: eachResponder?.company_name,
    company_license: eachResponder?.company_license,
    company_phone_number: eachResponder?.company_phone_number,
    company_address: eachResponder?.company_address,
    email: eachResponder?.email,
    nature_of_emergency:eachResponder?.nature_of_emergency,
    password: ''

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
    formdata.append("company_name", deviceData?.company_name);
    formdata.append("company_phone_number", deviceData?.company_phone_number );
    formdata.append("email", deviceData?.email );
    formdata.append("company_license", deviceData?.company_license );
    formdata.append("company_address", deviceData?.company_address );
    formdata.append("nature_of_emergency", deviceData?.nature_of_emergency );
    formdata.append("password", deviceData?.password );
   

    const url = "https://zubitechs.com/ads_apis/api/update_responder";

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
     
      <div className="text-tcolor font-bold py-2 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-3 lg:gap-y-6">
          <div className="w-full">
            <div>
              <label>Company’s Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_name"
                value={deviceData?.company_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s License Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_license"
                value={deviceData?.company_license}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>New Password</label>
              <input
                type="password"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="password"
                value={deviceData?.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_address"
                value={deviceData.company_address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s Official Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_phone_number"
                value={deviceData.company_phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Email Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="email"
                value={deviceData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>
                Nature of Emergency i.e{" "}
                <span className="text-xs">Hospital, Fire Service, Police</span>
              </label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="nature_of_emergency"
                value={deviceData.nature_of_emergency}
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

export default EditResponder;
