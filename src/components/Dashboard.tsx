
import Devices from "./admin/Devices";
import Header from "./admin/Header";
import Map from "./admin/Map";
import Users from "./admin/Users";

const Dashboard = () => {
  return (
    <div className="bg-[#E2E1FE]  max-h-full">
        <Header subhead='Welcome to ADS Management Dashboard' headText='Dashboard'/>
        <div className="w-full bg-[#E2E1FE] xl:h-[90%] h-full ">
          <Users />
          <div className="flex flex-col lg:flex-row gap-4 px-5 py-2 lg:py-5">
            <Devices />
            <Map />
          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
