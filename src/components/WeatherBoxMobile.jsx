import React from 'react'

const WeatherBoxMobile = () => {
  return (
    // <weather box mobile responsive
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center'>
                <p className='text-white text-6xl font-extrabold'>25</p>
                <p className='text-white text-3xl font-extrabold'>°C</p>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <p className='text-white text-2xl font-extrabold'>Sunny</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center'>
                <p className='text-white text-2xl font-extrabold'>Humidity</p>
                <p className='text-white text-2xl font-extrabold'>:</p>
                <p className='text-white text-2xl font-extrabold'>50%</p>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <p className='text-white text-2xl font-extrabold'>Wind</p>
                <p className='text-white text-2xl font-extrabold'>:</p>
                <p className='text-white text-2xl font-extrabold'>5km/h</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherBoxMobile