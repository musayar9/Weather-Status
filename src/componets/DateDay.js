import React, { memo } from 'react'

const Days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednasday', 'Thursday', 'Friday' , 'Saturday']
function DateDay({city, state}) {
  const weekDay = new Date().getDay()
  const weatherDay = Days.slice(weekDay, Days.length).concat(Days.slice(0,weekDay))
    let unix = city.sys.sunrise;
    let date = new Date(unix*1000);
    let dataDate = date.toLocaleDateString()
    console.log(dataDate)

    
    

  
  return (
    <>
    {state ? 
    <div>
       
      <h1 className=' text-xl sm:text-2xl md:text-3xl text-blue-800 font-bold text-center md:text-end p-4 sm:p-6'>{dataDate}/{weatherDay[0]}</h1>
        
    </div>

: null}
    </>
  )
}

export default memo(DateDay)
