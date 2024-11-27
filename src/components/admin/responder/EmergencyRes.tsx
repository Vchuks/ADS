import { useContext, useState } from "react";
import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { BiLoaderCircle } from "react-icons/bi";
import { MyContext } from "../../context/MyContext";


type Data = {
  email: string;
  company_phone_number: string;
  company_address: string;
  nature_of_emergency: string;
  company_name: string;
  company_license: string;
};
const EmergencyRes = () => {
  const {baseUrl} = useContext(MyContext)

  const [errors, setErrors] = useState({
    email: "",
    company_phone_number: "",
    company_address: "",
    nature_of_emergency: "",
    company_name: "",
    company_license: "",
  })
  const [responder, setResponder] = useState<Data>({
    email: "",
    company_phone_number: "",
    company_address: "",
    nature_of_emergency: "",
    company_name: "",
    company_license: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setResponder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const spin = document.getElementById("loader") as HTMLElement;
    spin.style.display = "block";
    const formData = new FormData();
    formData.append("email", responder.email);
    formData.append("company_phone_number", responder.company_phone_number);
    formData.append("company_address", responder.company_address);
    formData.append("company_name", responder.company_name);
    formData.append("company_license", responder.company_license);
    formData.append("nature_of_emergency", responder.nature_of_emergency);

    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

    if (responder?.email === '' ||
    responder?.company_phone_number ===  '' ||
    responder?.company_name === '' ||
    responder?.company_address  === '' ||
    responder?.company_license === '' ||
    responder?.nature_of_emergency === '' ){
      setErrors({
        email: "Enter the field",
    company_phone_number: "Enter the field",
    company_address: "Enter the field",
    nature_of_emergency: "Enter the field",
    company_name: "Enter the field",
    company_license: "Enter the field"
        
      })
    spin.style.display = "none";

    }else
    {const url = `${baseUrl}/ads_apis/api/create_responder`;
    fetch(url, {
      method: "POST",
      headers: tokHead,
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: result.message,
          confirmButtonColor: "#0055FD",
        }).then(result=>{
          if(result.value){
            setResponder({
              email: "",
              company_phone_number: "",
              company_address: "",
              nature_of_emergency: "",
              company_name: "",
              company_license: "",
            })
          }
        });
    spin.style.display = "none";

      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Error occured!",
          confirmButtonColor: "#ff0000",
        });
    spin.style.display = "none";

      })}
  };

  return (
    <div className="px-5 py-4">
      <IoArrowBackOutline
        className="text-xl text-tcolor"
        onClick={() => window.history.back()}
      />
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
                name="company_name"
                value={responder?.company_name}
                onChange={handleChange}
              />
              {responder?.company_name === '' && <p className="text-red-500 py-2">{errors?.company_name}</p>}
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s License Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_license"
                value={responder?.company_license}
                onChange={handleChange}
              />
              {responder?.company_license === '' && <p className="text-red-500 py-2">{errors?.company_license}</p>}
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_address"
                value={responder.company_address}
                onChange={handleChange}
              />
              {responder?.company_address === '' && <p className="text-red-500 py-2">{errors?.company_address}</p>}
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Company’s Official Number</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="company_phone_number"
                value={responder.company_phone_number}
                onChange={handleChange}
              />
              {responder?.company_phone_number === '' && <p className="text-red-500 py-2">{errors?.company_phone_number}</p>}
            </div>
          </div>
          <div className="w-full">
            <div>
              <label>Email Address</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="email"
                value={responder.email}
                onChange={handleChange}
              />
              {responder?.email === '' && <p className="text-red-500 py-2">{errors?.email}</p>}
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
                value={responder.nature_of_emergency}
                onChange={handleChange}
              />
              {responder?.nature_of_emergency === '' && <p className="text-red-500 py-2">{errors?.nature_of_emergency}</p>}
            </div>
          </div>
        </div>
      </div>

      <button
        className="font-bold bg-bcolor rounded-lg w-[100%] md:w-[70%] lg:w-[50%] xxxl:w-[40%] flex m-auto justify-center my-6 text-white p-3 lg:p-4"
        onClick={handleSubmit}
      ><span className="animate-spin text-2xl" id="loader">
      <BiLoaderCircle className="text-white" />
    </span>{" "}
        Create Emergency Responder
      </button>
    </div>
  );
};

export default EmergencyRes;
