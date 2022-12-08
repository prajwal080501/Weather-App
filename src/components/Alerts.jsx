import React from 'react'

const Alerts = ({weatherData}) => {
  return (
    <div>
        {/* alerts display for weather with sender name and description */}
        {
            weatherData.sender_name && weatherData.description ? (
                <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-2xl font-bold'>Alerts</p>
            <div className='w-[95%] h-fit p-4 mt-4 bg-black/30 text-white rounded-lg flex flex-col items-center justify-center'>
                <p className='text-white/80 text-xl font-light'>{weatherData.sender_name}</p>
                <p className='text-white text-xl font-bold'>{weatherData.description}</p>
                </div>
            </div>
            ) : (
                <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-2xl font-bold'>Alerts</p>
            <div className='w-[95%] h-fit p-4 mt-4 bg-black/30 text-white rounded-lg flex flex-col items-center justify-center'>
                <p className='text-white/80 text-xl font-light'>No Alerts </p>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default Alerts