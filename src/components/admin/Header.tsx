import { GiHamburgerMenu } from "react-icons/gi";
import Text from "../atom/Text";
import {useState} from 'react'
import Sidebar from "../Sidebar";


const Header = () => {
  const [openSide, setOpenSide] = useState(false)

  const handleNav = () =>{
    setOpenSide(!openSide)
  }
  return (
    <>
    <div className="bg-white px-5 py-4 w-full sticky top-0 flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-5">
      <GiHamburgerMenu className='text-xl' onClick={handleNav} />
      <div>
        <Text className="font-roboto text-tcolor font-semibold leading-none text-xl lg:text-[32px]" body='Dashboard'/>
        <Text className="text-[#464F60] text-xs lg:text-base" body='Welcome to ADS Management Dashboard'/>
      </div>
      </div>
      <div>
        <Text className="text-bcolor text-xs lg:text-base" body='11:30 - 18 October 2022'/>
      </div>
    </div>
    <div className="block lg:hidden ">

    {openSide && <Sidebar/>}
    </div>

    </>
  )
}

export default Header
