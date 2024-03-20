import "./App.css";
import { useEffect } from "react";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Verify from "./components/Verify";
import ResetPassword from "./components/ResetPassword";
import ResetSuccess from "./components/ResetSuccess";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import DeviceReport from "./components/pages/DeviceReport";
import ViewDetailsPage from "./components/pages/ViewDetailsPage";
import { MyDataProvider } from "./components/context/MyContext";
import { MapProvider } from "./components/context/MapContext";
import EditProfilePage from "./components/pages/EditProfilePage";
import CreateDevice from "./components/admin/report/CreateDevice";
import ResponderPage from "./components/pages/ResponderPage";
import EmergencyRes from "./components/admin/responder/EmergencyRes";
import ResponderView from "./components/pages/ResponderView";
import AgentPage from "./components/pages/AgentPage";
import CreateAgent from "./components/admin/agent/CreateAgent";
import AgentView from "./components/pages/AgentView";
import EditAgent from "./components/admin/agent/EditAgent";
import EditResponder from "./components/admin/responder/EditResponder";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="flex box-border lg:h-screen justify-between">
        {location.pathname !== "/" ? (
          // lg:w-[22%]  xl:w-[18%] 2xl:w-[14%] xxxl:w-[10%]
          <div
            className={`hidden lg:block lg:w-[276px] xl:w-[273px] 2xl:w-[267px] xxxl:w-[250px] `}
          >
            <Sidebar />
          </div>
        ) : null}
        <div
          className={
            // lg:w-[78%] xl:w-[82%] 2xl:w-[86%] xxxl:w-full
            location.pathname !== "/" ? "w-full relative" : "w-full"
          }
        >
          <MyDataProvider>
            <MapProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="forgot_password" element={<ForgotPassword />} />
                <Route path="verify" element={<Verify />} />
                <Route path="reset_password" element={<ResetPassword />} />
                <Route path="success" element={<ResetSuccess />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="device_report" element={<DeviceReport />} />
                <Route
                  path="device_report/details_page"
                  element={<ViewDetailsPage />}
                />
                <Route path="edit_profile" element={<EditProfilePage />} />
                <Route path="create_device" element={<CreateDevice />} />
                <Route path="responder" element={<ResponderPage />} />
                <Route path="responder/edit_responder" element={<EditResponder />} />
                <Route path="emergency_responder" element={<EmergencyRes />} />
                <Route
                  path="responder/details_page"
                  element={<ResponderView />}
                />
                <Route path="agent" element={<AgentPage />} />
                <Route path="create_agent" element={<CreateAgent />} />
                <Route path="agent/edit_profile" element={<EditAgent />} />
                <Route
                  path="agent/details_page"
                  element={<AgentView />}
                />
                <Route
                  path="*"
                  element={
                    <p className="h-[20vh] p-4 lg:px-14 w-full text-4xl flex items-center ">
                      Page not found!!!
                    </p>
                  }
                />
              </Routes>
            </MapProvider>
          </MyDataProvider>
        </div>
      </div>
    </>
  );
}

export default App;
