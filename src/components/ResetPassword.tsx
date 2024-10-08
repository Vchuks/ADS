import logo from "../assets/image/icon.png";
import Image from "./atom/Image";
import Text from "./atom/Text";
import React, { useState } from "react";
import TextLink from "./atom/TextLink";

const ResetPassword = () => {
  const [pass, setPass] = useState("password");
  const [resetpass, setResetPass] = useState("password");
  const changeType = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };
  const changeTypeReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (resetpass === "password") {
      setResetPass("text");
    } else {
      setResetPass("password");
    }
  };

  const [resetPsw, setResetPsw] = useState({
    password: "",
    resetpassword: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setResetPsw((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  return (
    <div className="bg-white h-screen">
      <div className="w-11/12 lg:w-2/5 m-auto h-full flex flex-col justify-center items-center">
        <div className="w-[60px] xl:pb-8">
          <Image className="w-full" src={logo} alt="" />
        </div>
        <Text
          className="font-quicksand py-4 2xl:py-10 text-tcolor text-2xl font-bold"
          body="Reset password"
        />
        <Text
          className="lg:w-10/12 pt-4 pb-8 text-center"
          body="Create new password to your account that."
        />

        <form className="w-full flex flex-col gap-8 pt-4">
          <div className="flex flex-col gap-2 relative">
            <label className="text-tcolor font-bold font-quicksand">
              Password
            </label>
            <input
              type={pass}
              className="border border-bcolor rounded-lg outline-bcolor px-6 py-4"
              name="password"
              value={resetPsw.password}
              onChange={handleChange}
              placeholder="Create password"
            />
            <button
              onClick={changeType}
              className="cursor-pointer text-tcolor absolute font-bold right-3 top-[55%]"
            >
              {pass === "password" ? "Show" : "Hide"}
            </button>
          </div>
          <div className="flex flex-col gap-2 relative">
            <label className="text-tcolor font-bold font-quicksand">
              Re-enter Password
            </label>
            <input
              type={resetpass}
              className="border border-bcolor rounded-lg outline-bcolor px-6 py-4"
              name="resetpassword"
              value={resetPsw.resetpassword}
              onChange={handleChange}
              placeholder="Re-enter password"
            />
            <button
              onClick={changeTypeReset}
              className="cursor-pointer text-tcolor absolute font-bold right-3 top-[55%]"
            >
              {resetpass === "password" ? "Show" : "Hide"}
            </button>
          </div>

          <div>
            <div className="xl:pt-4">
              <TextLink
                className=""
                to="/success"
                body={
                  <button className="bg-bcolor w-full font-bold text-white rounded-lg p-4">
                    Update
                  </button>
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
