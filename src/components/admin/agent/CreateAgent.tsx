import { useState } from "react";
import Text from "../../atom/Text";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";

type Data = {
  name: string;
  email: string;
  phone_number: string;
};
const CreateAgent = () => {
  const [agent, setAgent] = useState<Data>({
    name:'',
    email: "",
    phone_number: "",
    
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setAgent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(agent);
    const formData = new FormData();
    formData.append("name", agent.name);
    formData.append("email", agent.email);
    formData.append("phone_number", agent.phone_number);
    

    const getToken = JSON.parse(localStorage.getItem("user") || "");

    const tokHead = new Headers();
    tokHead.append("Authorization", `Bearer ${getToken.message[0].token}`);

    const url = "https://zubitechs.com/ads_apis/api/create_agents";
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
        });
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Error occured!",
          confirmButtonColor: "#ff0000",
        });
      });
  };

  return (
    <div className="px-5 py-4">
      <IoArrowBackOutline
        className="lg:hidden text-xl text-tcolor"
        onClick={() => window.history.back()}
      />
      <div className="md:w-[80%] xl:w-2/4 m-auto py-4">
        <Text
          className="lg:text-2xl pb-1 font-bold text-tcolor text-center"
          body="Create Agent "
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
              <label>Agent Name</label>
              <input
                type="text"
                className="w-full rounded-lg p-4 border border-bcolor"
                name="name"
                value={agent?.name}
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
                value={agent.phone_number}
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
                value={agent.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
        </div>
      </div>

      <button
        className="font-bold bg-bcolor rounded-lg w-[100%] md:w-[70%] lg:w-[50%] xxxl:w-[40%] flex m-auto justify-center my-6 text-white p-3 lg:p-4"
        onClick={handleSubmit}
      >
        Create Agent
      </button>
    </div>
  );
};

export default CreateAgent;
