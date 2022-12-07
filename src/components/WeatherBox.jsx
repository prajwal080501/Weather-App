import React, { useEffect, useState } from 'react'
import getFormattedWeatherData from '../services/weatherservice'
import Forecast from './Forecast'
import Input from './Input'
import TemperatureDetails from './TemperatureDetails'
import TimeLocation from './TimeLocation'
import TopButtons from './TopButtons'
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'

const WeatherBox = () => {
  const [query, setQuery] = useState(

  );
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setQuery({ lat: position.coords.latitude, lon: position.coords.longitude })
    })
  }
  const handleBackground = () => {
    if(!weatherData) return 'bg-gradient-to-br from-cyan-700 to-blue-600'
    const threshold =  units === 'metric' ? 20 : 60;
    if(weatherData.temp  == threshold) return 'bg-gradient-to-br from-cyan-700 to-blue-600'
    if(weatherData.temp > threshold) return 'bg-gradient-to-br from-yellow-400 to-red-500'
    if(weatherData.temp < threshold) return 'bg-gradient-to-br from-blue-400 to-indigo-500'
  }

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then(data => setWeatherData(data))
        .catch(err => console.log(err))

      console.log(weatherData)
      console.log(units)
    }

    fetchWeather();
  }, [query, units])

  return (
    // weather box
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className={
        `mx-auto  rounded-xl mb-10 w-[95%] lg:max-w-screen-md mt-5 py-5 transition-all px-25 lg:px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-400 ${handleBackground()} duration-200 ease-linear`
      }>
      {/* <TopButtons setQuery={setQuery} /> */}
      <Input setQuery={setQuery} unitss={units} setUnits={setUnits} />
      {weatherData && (
        <>
          <TimeLocation weatherData={weatherData} />
          <TemperatureDetails weatherData={weatherData} />
          <Forecast title="Hourly Forecast" items={weatherData.hourly} />
          <Forecast title="Daily Forecast" items={weatherData.daily} />
          <Footer/>
        </>
      )}
    </motion.div>
  )
}

export default WeatherBox