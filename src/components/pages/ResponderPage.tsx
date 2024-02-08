import Header from "../admin/Header"
import Responder from "../admin/responder/Responder"
import ResponderHeader from "../admin/responder/ResponderHeader"

const ResponderPage = () => {
  return (
    <div>
      <Header subhead="These are all the Responders of all the devices available" headText="Responder Page" />
      <ResponderHeader />
      <Responder />
    </div>
  )
}

export default ResponderPage
