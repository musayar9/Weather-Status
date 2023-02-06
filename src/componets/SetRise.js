import React from 'react'
import { TbSunrise,TbSunset } from 'react-icons/tb';
function SetRise({city, state}) {
    let unixSunset = city.sys.sunset
    let dateSunset = new Date(unixSunset*1000)
    let sunset = dateSunset.toLocaleTimeString()

    let unixSunrise = city.sys.sunrise;
    let dateSunrise = new Date(unixSunrise*1000);

    let sunrise = dateSunrise.toLocaleTimeString()
  return (
    <>
    {state ? 
    <div className='flex items-center justify-around p-4 sm:p-6'>
       <p className='text-xl sm:text-3xl text-grey-700 font-bold flex items-center'><TbSunrise size={50} className="text-yellow-800"/>{sunrise}</p>
        <p className='text-xl sm:text-3xl text-grey-700 font-bold flex items-center'><TbSunset size={50} className="text-red-700"/>{sunset}</p>
    </div>
    : null}
    </>
  )
}

export default SetRise
