import { FaPlus } from "react-icons/fa6";
import TextLink from "../atom/TextLink";

const Search = () => {
  return (
    <div className="grid grid-cols-2  px-5 py-2 gap-2 items-center md:grid-cols-2 lg:grid-cols-5 box-border">
      <div className="w-full box-border col-span-2 lg:col-span-1 ">
        <label className="text-tcolor">Date</label>
        <input type="date" value='2024-01-01' name='datereport' className="border border-[#4D5657] w-full rounded px-4 py-1 outline-none"/>
      </div>
      <div className="w-full box-border col-end-2 lg:col-span-2 lg:col-start-3">
        <input type="search" className="border rounded-md px-4 py-2 w-full border-[#DDE5E9] bg-[#F6F6F6] outline-none" placeholder="Search" />
      </div>
      <TextLink className="cursor-pointer" to="/create_device" body={<div className="w-full box-border relative ">
        <input type="text" placeholder="Create New Device" className="border w-full border-[#1410B4] rounded-lg placeholder:font-sm placeholder:text-[#1410B4] ps-6 pe-4 outline-none py-2" />
        <FaPlus className='text-[#1410B4] absolute top-3 left-2' />
      </div>}/>
    </div>
  )
}

export default Search
