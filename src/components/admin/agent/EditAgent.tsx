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


const EditAgent = () => {
  const {eachAgent} = useContext(MapContext)
  const {baseUrl} = useContext(MyContext)

  const user = JSON.parse(localStorage.getItem("user") || "");
  const token = user?.message[0]?.token;

  const [deviceData, setDeviceData] = useState({
    id: eachAgent?.agent_details?.id,
    name: eachAgent?.agent_details?.name,
    phone_number: eachAgent?.agent_details?.phone_number,
    email: eachAgent?.agent_details?.email,
    

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
    formdata.append("name", deviceData?.name);
    formdata.append("phone_number", deviceData?.phone_number );
    formdata.append("email", deviceData?.email );
   

    const url = `${baseUrl}/ads_apis/api/update_agent`;

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
      
      {/* owner */}
      <div className="text-tcolor font-bold py-2 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-3 lg:gap-y-6">
          <div className="w-full">
            <div>
              <label>Agent Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="name"
                value={deviceData?.name}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="w-full">
            <div>
              <label>Agent's Phone Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="phone_number"
                value={deviceData.phone_number}
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

export default EditAgent;
