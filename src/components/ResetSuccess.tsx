import logo from "../assets/image/icon.png";
import success from "../assets/image/check-circle.png";
import Image from "./atom/Image";
import Text from "./atom/Text";
import TextLink from "./atom/TextLink";

const ResetSuccess = () => {
  return (
    <div className="bg-white h-screen">
      <div className="w-11/12 lg:w-2/5 m-auto h-full flex flex-col justify-center items-center">
        <div className="w-[60px] xl:pb-8">
          <Image className="w-full" src={logo} alt="" />
        </div>
        <div className="w-[60px] xl:pb-8 pt-8">
          <Image className="w-full" src={success} alt="" />
        </div>
        <Text
          className="font-quicksand py-4 2xl:py-10 text-tcolor text-2xl font-bold"
          body="Successfully changed"
        />
        <Text
          className="lg:w-10/12 pt-4 pb-8 text-center"
          body="Your password has been sucessfully changed you can now proceed to login"
        />

        <div className="w-full flex flex-col gap-8 pt-4">
          <div className="xl:pt-4">
            <TextLink
              className=""
              to="/"
              body={
                <button className="bg-bcolor w-full font-bold text-white rounded-lg p-4">
                  Back to log-in
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
