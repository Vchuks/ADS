import { GiHamburgerMenu } from "react-icons/gi";
import Text from "../atom/Text";
import {useState} from 'react'
import Sidebar from "../Sidebar";

type textProps ={
  headText: string
  subhead: string
}

const Header = (props: textProps) => {
  const {headText, subhead} = props
  const [openSide, setOpenSide] = useState(false)

  const handleNav = () =>{
    setOpenSide(!openSide)
  }
  return (
    <>
    <div className="bg-white px-5 z-10 py-4 w-full sticky top-0 flex items-center gap-x-3 lg:gap-x-0 justify-between">
        <div className="flex items-center gap-2 lg:gap-5">
      <GiHamburgerMenu className='text-2xl lg:hidden' onClick={handleNav} />
      <div>
        <Text className="font-roboto pb-1 text-tcolor font-semibold leading-none text-lg md:text-xl lg:text-[32px]" body={headText}/>
        <Text className="text-[#464F60] text-xs lg:text-base" body={subhead}/>
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
