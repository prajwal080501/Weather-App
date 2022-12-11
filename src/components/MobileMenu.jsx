import { TiWeatherCloudy } from 'react-icons/ti'
import {HiMenuAlt4} from 'react-icons/hi'
import React from 'react'

const MobileMenu = () => {
  return (
    
    // mobile navbar
    <>
    <div className="lg:hidden w-screen sticky top-0 z-10 h-fit px-3 flex items-center bg-gray-100
    dark:bg-gray-900 dark:text-white shadow-md">
        <div className="flex items-center flex-1 justify-start">
        <TiWeatherCloudy className="text-white m-4 bg-blue-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-blue-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        <p className="text-xl cursor-pointer font-bold font-sans">
            Weather App
        </p>
        </div>
    </div>
        </>
  )
}

export default MobileMenu