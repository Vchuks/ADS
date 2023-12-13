
import logo from "../assets/image/icon.png";
import Image from "./atom/Image";
import Text from "./atom/Text";
import React, {useState} from 'react'
import TextLink from "./atom/TextLink";


const ForgotPassword = () => {
    
    const [forgotPsw, setForgotPsw] = useState({
        email: ''
    })
    const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {name, value} = event.target
        setForgotPsw((prevData)=>{
            return(
                {...prevData,
                [name]: value}
        )})
    }
  return (
    <div className="bg-white h-screen">
      <div className="w-11/12 lg:w-2/5 m-auto h-full flex flex-col justify-center items-center">
        <div className="w-[60px] xl:pb-8">
          <Image className="w-full" src={logo} alt="" />
        </div>
        <Text className="font-quicksand py-4 2xl:py-10 text-tcolor text-2xl font-bold" body='Forgot password?' />
        <Text className="lg:w-10/12 pt-4 pb-8 text-center" body='Enter your email address associated with your account to receive a confirmation code' />

        <form className="w-full flex flex-col gap-8 pt-4">
            <div className='flex flex-col gap-2'>
                <label className="text-tcolor font-bold font-quicksand">Enter company email address</label>
                <input type="email" className="border outline-bcolor border-bcolor rounded-lg px-6 py-4" name="email" value={forgotPsw.email} onChange={handleChange} placeholder="email@mail.com"/>
            </div>
            
            <div>
            <div className="xl:pt-4">
                <TextLink className="" to='/verify' body={<button className="bg-bcolor w-full font-bold text-white rounded-lg p-4">Continue</button>}/>
            </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword
