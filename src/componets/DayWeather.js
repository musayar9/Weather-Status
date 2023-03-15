/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'
import { FiMoon, FiSun, FiPercent} from 'react-icons/fi'
import { TbTemperaturePlus,TbTemperatureCelsius, TbTemperatureMinus } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'
import { memo } from 'react'

const Days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' , 'Sat']

function DayWeather({weatherStatus, state}) {
    const weekDay = new Date().getDay()
    const weatherDay = Days.slice(weekDay, Days.length).concat(Days.slice(0,weekDay))


  return (
    <>
  
    {state  ?
    
    <div className='mt-6 md:mt-10 '>
     <div className='flex items-center justify-center'> <label className='font-bold text-xl md:text-3xl text-blue-600 border border-gray-400 p-3 sm:p-4 md:p-6 rounded-lg flex items-center justify-center w-96'>Daily Weather</label></div>
    
    <Accordion allowZeroExpanded>
     {weatherStatus && weatherStatus.map((weather,index)=>( 
  (index === 0 ? null  : 
       <AccordionItem key={index} >
         <AccordionItemHeading className='m-2'>
           <AccordionItemButton>

             <div className='flex flex-row items-center m-auto p-2  border border-gray-400 rounded-xl xs:w-100 lg:w-120'>  
             <h2 className='font-bold flex items-center text-lg sm:text-xl basis-1/3 md:basis-1/2 ml-4'><span className='hidden md:flex'>{weather.date} /</span>  {weatherDay[index]}</h2>       
            <p className='basis-1/3 md:basis-1/2 ml-3'> <img className='  h-8 sm:h-10  w-8 sm:w-10 ' src={weather.icon}/></p>
        
             <p className='hidden sm:flex text font-bold text-lg sm:text-xl text-blue-500 basis-1/3 md:basis-1/2'>{weather.status}</p>
            
        
              
               <p className='mt-3 flex text-md sm:text-xl font-bold  basis-1/3 md:basis-1/2'><FiSun size={26} className='mt-1 text-yellow-600'/>{weather.degree} <TbTemperatureCelsius className='mr-1 text-yellow-500' size={26} /> / <FiMoon className='ml-1 text-gray-700' size={26}/>{weather.night}<TbTemperatureCelsius className='text-gray-500 pl-1' size={26}/></p>
            
             </div>
           </AccordionItemButton>
         </AccordionItemHeading>
         <AccordionItemPanel >
           <div  className='md:flex items-center  md:justify-evenly md:m-auto p-2 m-5  sm:p-5  md:p-8 border border-gray-500 rounded-xl xs:w-100 lg:w-120'>
           <h1 className='flex text-center  text-md md:text-xl text-md md:text-xl font-bold mr-2'>Clouds: <span className='ml-2 capitalize text-blue-500'>{weather.description}</span></h1>
        
           
             <p className=' flex  text-md md:text-xl font-bold mr-2'>Max Temp: <TbTemperaturePlus className='mt-1 text-red-500' size={26}/> {weather.max}<TbTemperatureCelsius className=' pr-1 text-red-500' /></p>
             <p className=' flex text-md md:text-xl font-bold mr-2'>Min Temp <TbTemperatureMinus className='mt-1 text-blue-500' size={26}/>{weather.min}     <TbTemperatureCelsius className='text-gray-500 pl-1' /></p>
             
               <p className='flex  text-md md:text-xl font-bold mr-2'>Humidity:<WiHumidity className='mt-1 text-blue-500' size={26}/> <span>{weather.humidity}</span><FiPercent className='text-blue-500' /></p>
             
              
      
           
         
           </div>
         </AccordionItemPanel>
       </AccordionItem>
  )
     ))}
    </Accordion>
    
    </div>

   : null
    }
    
    </>
  )
}

export default memo(DayWeather)
