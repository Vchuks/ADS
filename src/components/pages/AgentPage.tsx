import Header from "../admin/Header"
import AgentHeader from "../admin/agent/AgentHeader"
import Agent from "../admin/agent/Agent"
// import AgentProfile from "../admin/agent/AgentProfile";

const AgentPage = () => {
  // const getToken = JSON.parse(localStorage.getItem("user") || "");
  // {getToken?.message[0].type === 'admin' ? 
  return (
    <div>
      <Header subhead="These are all the agents of all the devices available" headText="Agent Page" />
      <AgentHeader />
      <Agent /> 
      
    </div>
  )
}

export default AgentPage
