import React from 'react'
import MobileMenu from '../components/MobileMenu';
import WeatherBox from '../components/WeatherBox';
import WeatherBoxMobile from '../components/WeatherBoxMobile';
import Navbar from './../components/Navbar';

const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <MobileMenu/>
        <WeatherBox />
    </div>
  )
}

export default Home