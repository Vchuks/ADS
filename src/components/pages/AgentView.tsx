import Header from "../admin/Header"
import ViewDetails from "../admin/agent/ViewDetailAgent"

const AgentView = () => {
  return (
    <div>
       <Header subhead="Welcome Alex, Description Of the  particular devices you selected " headText="View Details Page" />
       <ViewDetails />
    </div>
  )
}

export default AgentView
