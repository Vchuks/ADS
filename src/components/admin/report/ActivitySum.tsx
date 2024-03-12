import { useContext } from 'react';
import Text from '../../atom/Text';
import { MapContext } from '../../context/MapContext';

const ActivitySum = () => {
  const {report} = useContext(MapContext);
console.log(report)
  return (
    <div className='activity-box p-4 w-full text-tcolor py-2 font-roboto'>
      <Text className='text-xl xl:text-3xl py-2 font-extrabold border-b-4 border-opacity-5 border-[#4D5657]' body='Activities Summary' />
      <Text className='text-sm py-2 font-medium' body='High Acceleration events detected' />
      <div className='grid grid-cols-2 gap-4 py-4'>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.accident_detected}/>
          <Text className='text-xs' body='Total Vehicle'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.onlinedevice}/>
          <Text className='text-xs' body='Total Online'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.accident_detected}/>
          <Text className='text-xs' body='Total Accident Detected'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.sos}/>
          <Text className='text-xs' body='Total SOS'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.offlinedevice}/>
          <Text className='text-xs' body='Total Away'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.offlinedevice}/>
          <Text className='text-xs' body='Total Offline'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.manualscan}/>
          <Text className='text-xs' body='Manual Report'/>
        </div>
        <div className='activity-box rounded-lg text-center py-4'>
          <Text className='text-2xl font-medium' body={report?.counts?.pending_case}/>
          <Text className='text-xs' body='Pending Case'/>
        </div>
      </div>
      <Text className='text-xl xl:text-3xl mt-2 py-2 font-extrabold' body='Export To Excel' />
      <button className='text-white bg-bcolor w-full py-3 mt-6 font-bold rounded-lg'>Download Report</button>
    </div>
  )
}

export default ActivitySum
