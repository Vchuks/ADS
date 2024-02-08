import Header from "../admin/Header"
import Report from "../admin/report/Report"

const DeviceReport = () => {
  return (
    <div>
      <Header subhead="These are all the reports of all the devices available " headText="Device Report" />
      <div>
        <Report/>
      </div>
    </div>
  )
}

export default DeviceReport
