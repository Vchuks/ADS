import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const Search = () => {
  const loginDetails = JSON.parse(localStorage.getItem("user") || "");
  const [userData] = useState(loginDetails);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  // const btnRef = useRef<HTMLInputElement>(null)
  const [date, setDate] = useState("2024-01-01");
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const disableButton = () => {
    if (
      userData?.message[0]?.type === "responder" ||
      userData?.message[0]?.type === "agent"
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
      location.href = "/create_device";
    }
  };

  return (
    <div className="grid grid-cols-2  px-5 py-2 gap-2 items-center md:grid-cols-2 lg:grid-cols-5 box-border">
      <div className="w-full box-border col-span-2 lg:col-span-1 ">
        <label className="text-tcolor">Date</label>
        <input
          type="date"
          value={date}
          onChange={handleDate}
          name="datereport"
          className="border border-[#4D5657] w-full rounded px-4 py-1 outline-none"
        />
      </div>
      <div className="w-full box-border col-end-2 lg:col-span-2 lg:col-start-3">
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          className="border rounded-md px-4 py-2 w-full border-[#DDE5E9] bg-[#F6F6F6] outline-none"
          placeholder="Search"
        />
      </div>
      {/* <TextLink className="cursor-pointer" to="/create_device" body={ */}
      <div className="w-full box-border relative ">
        <input
          type="text"
          defaultValue="Create New Device"
          readOnly
          placeholder="Create New Device"
          className="border w-full border-[#1410B4] rounded-lg placeholder:font-sm cursor-pointer placeholder:text-[#1410B4] ps-6 pe-4 outline-none py-2"
          disabled={isButtonDisabled}
          onClick={disableButton}
        />
        <FaPlus className="text-[#1410B4] absolute top-3 left-2" />
      </div>
      {/* }/> */}
    </div>
  );
};

export default Search;
