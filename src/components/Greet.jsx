import React from 'react'
import { TiWeatherNight, TiWeatherPartlySunny, TiWeatherSunny } from 'react-icons/ti';

const Greet = () => {
    function getGreeting() {
        let today = new Date();
        let curHr = today.getHours();

        if (curHr < 12) {
            return "Good Morning";
        } else if (curHr < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    }

    const handleIcon = () => {
        let today = new Date();
        let curHr = today.getHours();

        if (curHr < 12) {
            return <TiWeatherSunny className="text-white animate-spin text-center opacity-50 m-4 bg-yellow-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-yellow-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        } else if (curHr < 18) {
            return <TiWeatherPartlySunny className="text-white m-4 bg-yellow-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-yellow-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        } else {
            return <TiWeatherNight className="text-white m-4 bg-yellow-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-yellow-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        }
    }

  return (
    <div className='bg-transparent w-full h-fit pt-8'>
        <div className='flex flex-row items-center justify-center'>
            <p className="text-xl z-10 lg:text-3xl font-semibold text-start text-white/50">{
                getGreeting()
                // morning icon from openweather api
            }</p>
          {handleIcon()}
            </div>
        </div>
  )
}

export default Greet