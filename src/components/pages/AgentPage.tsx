import Header from "../admin/Header"
import AgentHeader from "../admin/agent/AgentHeader"
import Agent from "../admin/agent/Agent"

const AgentPage = () => {
  return (
    <div>
      <Header subhead="These are all the agents of all the devices available" headText="Agent Page" />
      <AgentHeader />
      <Agent />
    </div>
  )
}

export default AgentPage
