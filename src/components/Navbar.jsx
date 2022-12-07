import React from 'react'
import { TiWeatherCloudy } from 'react-icons/ti'

const Navbar = () => {
  return (
    <div className="hidden lg:inline-flex sticky top-0 z-10 w-screen h-[10vh] px-3 items-center bg-gray-100 drop-shadow-md">
        <div className="flex items-center flex-1">
        <TiWeatherCloudy className="text-white m-5 bg-blue-500 h-12 px-2 rounded-full shadow-md w-12 hover:scale-105 hover:bg-blue-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />

        <p className="text-3xl cursor-pointer font-bold font-sans">
            Weather App
        </p>
        </div>
        <div className="flex list-none space-x-10 items-center flex-1 justify-center text-xl font-medium ">
        <li className="cursor-pointer hover:text-blue-400 duration-200">About</li>
        <li className="cursor-pointer hover:text-blue-400 duration-200">Docs</li>
        <li className="cursor-pointer hover:text-blue-400 duration-200">Contact</li>
        </div>
        <div className="flex items-center flex-1 justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-semibold px-4 py-2 rounded-md shadow-md">
            Login
        </button>
        </div>
    </div>
  )
}

export default Navbar