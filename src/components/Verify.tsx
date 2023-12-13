import logo from "../assets/image/icon.png";
import Image from "./atom/Image";
import Text from "./atom/Text";
import TextLink from "./atom/TextLink";

const Verify = () => {
    
  return (
    <div className="bg-white h-screen">
      <div className="w-11/12 lg:w-[35%] m-auto h-full flex flex-col justify-center items-center">
        <div className="w-[60px] xl:pb-8">
          <Image className="w-full" src={logo} alt="" />
        </div>
        <Text className="font-quicksand py-4 2xl:py-10 text-tcolor text-2xl font-bold" body='Enter reset code' />
        <p className="xl:w-10/12 pt-4  text-center">We sent a Reset code to <span className="font-bold">em*******@m***.com</span></p>
        <p className="lg:w-10/12  pb-8 text-center">If you didn't get the confirmation code in your inbox please <span className="font-bold text-bcolor">Click here</span></p>

        <form className="w-full flex flex-col gap-8 pt-4">
            
            <div>
                <div className="flex gap-2 justify-center">
                    <input type="text" className="border border-tcolor rounded outline-bcolor text-center py-2 w-12 placeholder:text-center placeholder:font-semibold placeholder:text-3xl text-2xl" placeholder="0"/>
                    <input type="text" className="border border-tcolor rounded outline-bcolor text-center py-2 placeholder:px-3 placeholder:pt-3 placeholder:pb-1 w-12 placeholder:text-center placeholder:font-semibold placeholder:text-3xl text-2xl" placeholder="0"/>
                    <input type="text" className="border border-tcolor rounded outline-bcolor text-center py-2 placeholder:px-3 placeholder:pt-3 placeholder:pb-1 w-12 placeholder:text-center placeholder:font-semibold placeholder:text-3xl text-2xl" placeholder="0"/>
                    <input type="text" className="border border-tcolor rounded outline-bcolor text-center py-2 placeholder:px-3 placeholder:pt-3 placeholder:pb-1 w-12 placeholder:text-center placeholder:font-semibold placeholder:text-3xl text-2xl" placeholder="0"/>
                </div>
            <div className="pt-6">
                <TextLink className="" to='/reset_password' body={<button className="bg-bcolor w-full font-bold text-white rounded-lg p-4">Verify</button>}/>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Verify
