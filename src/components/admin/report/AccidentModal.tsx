import Text from "../../atom/Text";

const AccidentModal = () => {
  return (
    <div className="bg-[#232323ab] fixed top-0  xl:w-[85dvw] 2xl:w-[87dvw] xxxl:w-[92dvw] overflow-scroll h-full flex items-center">
      <div className="w-[80%] lg:w-2/4 p-5 m-auto text-tcolor rounded-3xl bg-white">
        <div className="text-center w-full xl:w-[60%] m-auto">
          <Text className="font-bold lg:text-2xl" body="Accident Detected" />
          <Text
            className="text-sm lg:text-base"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 lg:p-4 mt-4">
          <div className="flex items-center justify-between">
            <Text className="font-bold" body="Nature Of Request" />
            <Text
              className="font-bold bg-[#ffc0bfa6] text-[#CE5347] p-2 lg:p-4 rounded-lg"
              body="Drowning Vehicle"
            />
          </div>
          <div className="flex items-center  justify-between">
            <Text className="font-bold" body="Time & Date" />
            <Text className="font-bold p-2 lg:p-4" body="23/11/2023 | 14:00" />
          </div>
          <button className="w-2/5 xl:mt-4 p-3 lg:p-4 m-auto text-white font-bold rounded-lg bg-[#0055FD]">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccidentModal;
