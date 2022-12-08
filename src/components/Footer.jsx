import React from 'react'
import {HiDownload} from 'react-icons/hi'
const Footer = ({shareScreenshot}) => {
  return (
    <div className='bg-transparent w-full h-fit pt-8'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-normal lg:text-xl font-extralight'>Made with ❤️ by  
            <span className='font-bold'>  Prajwal Ladkat</span>
            </p>
            <p className='text-white text-normal lg:text-xl font-extralight'>Data from 
            {" "}
            
            <span className='font-semibold'><a href='https://openweathermap.org/' target='_blank' rel='noreferrer'>OpenWeatherMap</a></span></p>
            {/* add a download button at right corner */}
            <button onClick={shareScreenshot} className='bg-transparent text-white text-3xl px-2 lg:px-2 font-extrabold flex justify-end w-fit items-end self-end pr-3 animate-bounce duration-200 hover:scale-110'>
                <HiDownload />
            </button>
            </div>
    </div>
  )
}

export default Footer