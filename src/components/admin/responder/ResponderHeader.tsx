import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const ResponderHeader = () => {
  const loginDetails = JSON.parse(localStorage.getItem("user") || "");
  const [userData] = useState(loginDetails);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  // const btnRef = useRef<HTMLInputElement>(null)
  // const [filter, setFilter] = useState("");
  // const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilter(event.target.value);
  // };

  const disableButton = () => {
    if (
      userData?.message[0]?.type === "responder" ||
      userData?.message[0]?.type === "agent"
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
      location.href = "emergency_responder";
    }
  };
  return (
    <div className="grid grid-cols-2  px-5 py-2 gap-2 items-center md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 box-border">
      <div className="w-full box-border col-span-1 ">
        {/* <select
          className="border border-[#4D5657] w-full rounded px-4 py-2 outline-none"
          value={filter}
          onChange={handleFilter}
        >
          <option>Filter by date</option>
        </select> */}
      </div>
     
          <div className="w-full box-border relative lg:col-start-4 xl:col-start-5 cursor-pointer">
            <input
              type="text"
              placeholder="Add Responder"
              defaultValue="Add Responder"
              readOnly
              className="border w-full border-[#1410B4] rounded-lg placeholder:font-sm cursor-pointer placeholder:text-[#1410B4] ps-6 pe-4 outline-none py-2"
              disabled={isButtonDisabled}
              onClick={disableButton}
            />
            <FaPlus className="text-[#1410B4] absolute top-3 left-2" />
          </div>
        
    </div>
  );
};

export default ResponderHeader;
