/* eslint-disable jsx-a11y/alt-text */


import { FaWind, FaCompressArrowsAlt } from 'react-icons/fa'
import { WiHumidity, } from 'react-icons/wi'
import { GiWindSlap } from 'react-icons/gi'
import { TbTemperatureCelsius, TbTemperatureMinus, TbTemperaturePlus } from 'react-icons/tb'
import { FiPercent } from 'react-icons/fi'
import { BiMapPin } from 'react-icons/bi'
import SetRise from './SetRise'
import { memo } from 'react'
import DateDay from './DateDay'



const CityWeather = ({ city, state }) => {
  const newLocal = <DateDay city={city} state={state} />
  const newSunrise = <SetRise city={city} state={state} />
  return (
    <div>



      {state ?

        <div className='border-t m-5'>
          {newLocal}
          <h1 className='text-3xl sm:text-4xl md:text-6xl text-blue-700 font-bold mt-3 md:mt-6 flex items-center justify-center capitalize'><BiMapPin className='mr-3 text-blue-400' /> {city.name}/ {city.sys.country} </h1>


          {newSunrise}

          <div className='p-2 sm:p-4 md:p-6 group:uppercase sm:flex items-center justify-between'>
            <div className='ml-0 sm:ml-10 flex items-center justify-center'>

              <img className=' w-48 sm:w-64 h-48 sm:h-64  ' src={`icons/${city.weather[0].icon}.png`} id='picture'></img>


            </div>
            <div className=' md:pr-5 m-auto'>
              <h3 className='text-2xl sm:text-4xl md:text-5xl text-blue-400 text-center capitalize font-bold mb-3' >{city.weather[0].main}</h3>
              <p className='text-2xl  sm:text-5xl md:text-7xl text-red-700  font-bold flex items-center justify-center text-center  '>  {city.main.temp} <TbTemperatureCelsius size={50} /></p>
              <p className='text-2xl sm:text-4xl md:text-5xl text-grey-700 font-bold flex items-center justify-center mt-2 sm:mt-6 pl-5'><TbTemperaturePlus className='m-1 text-red-700' /> {city.main.temp_max}  <TbTemperatureCelsius size={26} /> / <TbTemperatureMinus className='m-1 text-blue-400' /> {city.main.temp_min} <TbTemperatureCelsius size={26} /></p>


            </div>

          </div>

          <div className='p-2 sm:p-4 md:p-6 hidden  sm:flex items-center  justify-center sm:justify-around'>
            <div className='p-2 sm:p-4 '>


              <p className='text-lg sm:text-xl md:text-2xl text-red-500 font-bold flex items-center'>Humidity:<WiHumidity className='m-1 sm:m-3 text-blue-800 ' size={28} /><span className='text-xl sm:text-2xl md:text-4xl text-blue-500'>{city.main.humidity}</span>  <FiPercent className='text-blue-500' /></p>
              <p className='text-lg sm:text-xl md:text-2xl text-red-500 font-bold flex items-center'>Feels Like: <GiWindSlap className='m-1 sm:m-3 text-blue-800 ' size={28} /><span className='text-xl sm:text-2xl md:text-4xl text-blue-500'>{city.main.feels_like}</span>  <TbTemperatureCelsius className='text-blue-500' size={26} /></p>



            </div>
            <div className='p-2 sm:p-4'>

              <p className='text-lg sm:text-xl md:text-2xl font-bold flex items-center text-red-500' > Wind:<FaWind className='m-1 sm:m-3 text-blue-700 ' size={28} /><span className='text-xl sm:text-2xl md:text-4xl text-blue-500'> {city.wind.speed} m/s</span></p>
              <p className='text-lg sm:text-xl md:text-2xl text-red-500 font-bold flex items-center' > Pressure:<FaCompressArrowsAlt className='m-1 sm:m-3 text-blue-700' size={28} /><span className='text-xl sm:text-2xl md:text-4xl text-blue-500'>{city.main.pressure}pHa</span> </p>
            </div>
          </div>



        </div>
        : null
      }
    </div>

  )
}

export default memo(CityWeather)
