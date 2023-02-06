import './App.css';
import axios from 'axios';
import { useEffect,useState,useRef } from 'react';
import CityWeather from './componets/CityWeather';
import { FaCloud } from 'react-icons/fa';
import { memo } from 'react';
import DayWeather from './componets/DayWeather';


function App() {
  const url = 'https://api.openweathermap.org/data/2.5/'
  const ApiKey ='Your ApiKey'
  const [searchCity, setSearchCity] = useState("")
  const [city, setCity] = useState()
  const [state, setState] = useState(false)

  const inputRef = useRef(null)
const [hava, setHava] = useState()
  useEffect(()=> {
    async function GetWeatherApi() {
      try {
        const response = await axios.get(`${url}weather?q=${searchCity}&appid=${ApiKey}&units=metric&lang=tr`);
        console.log(response);
        setCity(response.data)
     

  
        setState(true)
        console.log(response.data)

        const request = new XMLHttpRequest();
        request.open("GET",`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${searchCity}`)
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("authorization", "Your ApiKey");
        request.send()
        request.addEventListener("load",function(){
        console.log(this)

        const data = JSON.parse(this.responseText)
        console.log(data.result)
        setHava (data.result)
        })


      } catch (error) {
        console.error(error);
      }
      
    }
    GetWeatherApi()
  },[searchCity])

const handleClick = () =>{

  setSearchCity(inputRef.current.value)

}


  return (
    <>
     
    
        <div className='container m-auto p-2 sm:p-4  border border-gray-400 rounded-lg  xs:w-100 lg:w-120 mt-8 '>
            <div className='bg-white text-blue-700 p-2 md:p-6 flex items-center justify-center'>
              <h3 className='font-bold text-2xl uppercase' >Hava Durumu</h3>
            </div>
            <div className='border-t'>
          <form onClick={(e)=>{e.preventDefault(); handleClick()}}>
                <label className="block">
               
               
                  <input ref={inputRef} type="text" className="border border-blue-400 w-full p-4 text-center text-xl sm:text-3xl font-bold rounded-lg mt-5 mb-5 focus:outline-none" placeholder='City Name'/>
                  
                </label>
                <button   type='submit' className='bg-blue-600 p-4 m-4 text-white text-lg sm:text-xl font-normal rounded-lg flex items-cemter mx-auto w-24 sm:w-28'>Ara <FaCloud className='ml-2 text-2xl'/></button>
                </form>
           
               <CityWeather city={city} state={state}/>
             
            </div>
        
        </div>
     
        <DayWeather hava = {hava} state={state}/>
    </>
  );
}

export default memo(App);
