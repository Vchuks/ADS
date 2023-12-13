import logo from "../assets/image/icon.png";
import Image from "./atom/Image";
import Text from "./atom/Text";
import React, {useState} from 'react'
import TextLink from "./atom/TextLink";


const Login = () => {
    const [pass, setPass] = useState('password')
    const changeType =(event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        if (pass === 'password'){
            setPass('text')
        }else{
            setPass('password')
        }
    }
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {name, value} = event.target
        setLogin((prevData)=>{
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
        <Text className="font-quicksand py-4 2xl:py-10 text-tcolor text-2xl font-bold" body='Login to your account' />

        <form className="w-full flex flex-col gap-8 pt-4">
            <div className='flex flex-col gap-2'>
                <label className="text-tcolor font-bold font-quicksand">Email Address</label>
                <input type="email" className="border outline-bcolor border-bcolor rounded-lg px-6 py-4" name="email" value={login.email} onChange={handleChange} placeholder="email@mail.com"/>
            </div>
            <div>
            <div className="flex flex-col gap-2 relative">
                <label className="text-tcolor font-bold font-quicksand">Password</label>
                <input type={pass} className="border border-bcolor rounded-lg outline-bcolor px-6 py-4" name="password" value={login.password} onChange={handleChange} placeholder="Create password"/>
                <button onClick={changeType} className="cursor-pointer text-tcolor absolute font-bold right-3 top-[55%]">{pass === 'password' ? 'Show' : 'Hide'}</button>
            </div>
            <div className="flex justify-between items-center pt-3">
                <div className="flex items-center gap-1">
                    <input type="checkbox" className="cursor-pointer"/>
                    <Text className="text-tcolor" body='Remember password'/>
                </div>
                <TextLink to='/forgot_password' className="text-tcolor" body='Forgot Password' />
            </div>
            </div>
            <div>
            <div className="xl:pt-4">
                <TextLink className="" to='/dashboard' body={<button className="bg-bcolor w-full font-bold text-white rounded-lg p-4">Log-in</button>}/>
            </div>
            {/* <p className="text-center text-tcolor pt-4">Don't have an account? <span className="font-bold text-bcolor"><TextLink body='Create a account' to="" className="" /></span></p> */}
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
