import React from 'react'
import MobileMenu from '../components/MobileMenu';
import WeatherBox from '../components/WeatherBox';
import WeatherBoxMobile from '../components/WeatherBoxMobile';
import Navbar from './../components/Navbar';

const Home = ({handleLogout, getUserDetails}) => {
  return (
    <div className='dark:bg-gray-900 
    '>
        <Navbar handleLogout={handleLogout} getUserDetails={getUserDetails} />
        <MobileMenu handleLogout={handleLogout} getUserDetails={getUserDetails}/>
        <WeatherBox />
    </div>
  )
}

export default Home