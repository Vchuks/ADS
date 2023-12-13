import Box from "../atom/Box"

const Users = () => {
  return (
    <>
    <div className=" grid grid-cols-3 lg:grid-cols-5 gap-4 px-5 py-2 pt-5">
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#62C554]' firstText="Online" secondText="2058" firstClass="text-white leading-none text-[20px] font-bold" secondClass="text-white leading-snug text-[17px]"/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#FFE8D3]' firstText="Away" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#FFE5B0]' firstText="Offline" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-3 py-4 xl:py-6 rounded-lg bg-[#FFD1D1]' firstText="Accident Detected" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#B3CBFB]' firstText="SOS" secondText="2058" firstClass="" secondClass=""/>
      
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#CCFFE7]' firstText="Reviewed Cases" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#F1CBFF]' firstText="Manual Report" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#DCCBFF]' firstText="Attended Cases" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#F4FFC8]' firstText="Pending Cases" secondText="2058" firstClass="" secondClass=""/>
      <Box mainClass='w-full text-center px-2 xl:px-5 py-4 xl:py-6 rounded-lg bg-[#DDFFF9]' firstText="Responders" secondText="2058" firstClass="" secondClass=""/>
    </div>
    </>
  )
}

export default Users
