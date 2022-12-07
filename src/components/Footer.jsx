import React from 'react'

const Footer = () => {
  return (
    <div className='bg-transparent w-full h-fit pt-8'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-normal lg:text-xl font-extralight'>Made with ❤️ by  
            <span className='font-bold'>  Prajwal Ladkat</span>
            </p>
            <p className='text-white text-normal lg:text-xl font-extralight'>Data from 
            {" "}
            <span className='font-semibold'><a href='https://openweathermap.org/' target='_blank' rel='noreferrer'>OpenWeatherMap</a></span></p>
            </div>
    </div>
  )
}

export default Footer