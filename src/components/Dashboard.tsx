import Sidebar from "./Sidebar"
import Devices from "./admin/Devices"
import Header from "./admin/Header"
import Map from "./admin/Map"
import Users from "./admin/Users"

const Dashboard = () => {
  return (
    <div className="flex box-border lg:h-screen">
        <div className="hidden lg:block lg:w-[30%]">

      <Sidebar/>
        </div>
      <div className="w-full bg-[#E2E1FE] ">
        <Header/>
        <Users/>
        <div className="flex flex-col lg:flex-row gap-4 px-5 py-2 xl:py-3">
            <Devices/>
            <Map/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
