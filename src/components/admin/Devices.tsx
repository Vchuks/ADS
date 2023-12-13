import Text from "../atom/Text"
import { IoSearchSharp } from "react-icons/io5"
import { BsFillTelephoneFill } from "react-icons/bs"

const Devices = () => {
  return (
    <div className="device-box lg:w-[35%] p-4 maph maph-device ">
      <Text className="text-tcolor text-2xl font-extrabold pb-2 border-b-2 border-opacity-5 border-black" body='All Devices'/>
      <div className="flex py-4">
        <div className="bg-bcolor rounded-s-lg p-3">
            <IoSearchSharp className='text-white' />
        </div>
        <input className="outline-bcolor w-full ps-3" type="search" placeholder="Search..." />
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
      <div className="flex justify-between items-center py-1 gap-1">
        <p className="font-medium font-quicksand text-[#464F60]">Device: <span className="font-medium font-quicksand text-[#464F60]">790162</span></p>
        <BsFillTelephoneFill className='text-bcolor' />
        <Text className="text-[#62C554] font-extrabold font-roboto lg:text-lg" body='Online'/>
      </div>
    </div>
  )
}

export default Devices
