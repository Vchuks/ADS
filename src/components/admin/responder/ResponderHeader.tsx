import { FaPlus } from "react-icons/fa6";
// import TextLink from "../../atom/TextLink"; 

const ResponderHeader = () => {
    return (
        <div className="grid grid-cols-2  px-5 py-2 gap-2 items-center md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 box-border">
          <div className="w-full box-border col-span-1 ">
            <select className="border border-[#4D5657] w-full rounded px-4 py-2 outline-none"><option>Filter by date</option></select>
          </div>
          {/* <TextLink className="w-full" to="/" body={ */}
          <div className="w-full box-border relative lg:col-start-4 xl:col-start-5 ">
            <input type="text" placeholder="Add Responder" className="border w-full border-[#1410B4] rounded-lg placeholder:font-sm placeholder:text-[#1410B4] ps-6 pe-4 outline-none py-2" />
            <FaPlus className='text-[#1410B4] absolute top-3 left-2' />
          </div>
        </div>
      )
}

export default ResponderHeader
