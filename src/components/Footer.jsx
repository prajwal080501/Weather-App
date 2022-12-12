import React from 'react'
import {HiDownload} from 'react-icons/hi'
import {AiOutlineShareAlt} from 'react-icons/ai'
const Footer = ({shareScreenshot}) => {
  const shareWebsite = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Weather App',
        text: 'Check out this awesome weather app',
        url: 'https://appweatherweb.vercel.app/',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }
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
            <div className='flex flex-row items-center justify-center space-x-4 mt-8'>
            <button onClick={shareScreenshot} className='bg-transparent text-white text-3xl px-2 lg:px-2 font-extrabold flex justify-end w-fit items-end self-end pr-3 animate-bounce duration-200 hover:scale-110'>
                <HiDownload />
            </button>
            {/* share button */}
            <button onClick={shareWebsite} className='bg-transparent text-white text-3xl px-2 lg:px-2 font-extrabold flex justify-end w-fit items-end self-end pr-3 animate-bounce duration-200 hover:scale-110'>
                <AiOutlineShareAlt />
            </button>
            </div>
            </div>
            {/* terms and privacy plicy */}
            <div className='flex flex-col items-center justify-center mt-8'>
              <a href='https://www.freeprivacypolicy.com/live/837700e9-fc30-4fd1-9026-8b632c9859c8' target='_blank' rel='noreferrer' className='text-white text-normal lg:text-xl font-extralight'>Privacy Policy</a>
              </div>
    </div>  
  )
}

export default Footer