import React, { useEffect, useState } from 'react'
import getFormattedWeatherData from '../services/weatherservice'
import Forecast from './Forecast'
import Input from './Input'
import TemperatureDetails from './TemperatureDetails'
import TimeLocation from './TimeLocation'
import TopButtons from './TopButtons'
import { motion } from 'framer-motion';
import Footer from './Footer'
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import Clouds from './Clouds'

const WeatherBox = () => {
  const [query, setQuery] = useState(

  );
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);


  const shareScreenshot = async () => {
    // save a div as an image
    const canvas = document.getElementById('canvas');
    // create a url for the image
    const url = await html2canvas(canvas, {
      allowTaint: true,
      useCORS: true}).then(canvas => {
      return canvas.toDataURL('image/png');
    });
    saveAs(url, 'weather.png');
  }

  const shareScreenshot2 = async () => {
    const canvas = document.getElementById('canvas');
    // create a url for the image
    const url = await html2canvas(canvas, {
      allowTaint: true,
      useCORS: true}).then(canvas => {
      return canvas.toDataURL('image/png');
    });
    saveAs(url, 'weather.png').then(() => {
            // share the image
            if (navigator.share) {
                navigator.share({
                    title: 'Weather',
                    text: 'Weather',
                    url: url
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                .catch(console.error);
            } else {
                console.log('Web Share API is not supported.');
            }
        });
  }


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setQuery({ lat: position.coords.latitude, lon: position.coords.longitude })
    })
  }

  const handleBackground = () => {
    if(!weatherData) return 'bg-gradient-to-br from-cyan-700 to-blue-600 transition-all duration-500'
    const threshold =  units === 'metric' ? 20 : 60;
    if(weatherData.temp  == threshold) return 'bg-gradient-to-br from-cyan-700 to-blue-600 transition-all duration-500'
    if(weatherData.temp > threshold) return 'bg-gradient-to-br from-yellow-400 to-red-500 transition-all duration-500'
    if(weatherData.temp < threshold) return 'bg-gradient-to-br from-blue-400 to-indigo-500 transition-all duration-500'
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
    <>
    <div
      // initial={{ opacity: 0, y: -100 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -100 }}
      // transition={{ duration: 1 }}
      id="canvas"
      className={
        `mx-auto rounded-none lg:rounded-xl mb-10 w-[100%] lg:max-w-screen-md mt-0 lg:mt-5 py-5 px-25 lg:px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-400 ${handleBackground()} duration-200 ease-linear`
      }>
        <Clouds/>
      <TopButtons setQuery={setQuery} />
      <Input setQuery={setQuery} unitss={units} setUnits={setUnits} />
      {weatherData && (
        <>

          <TimeLocation weatherData={weatherData} />
          <TemperatureDetails weatherData={weatherData} />
       
          <Forecast title="Hourly Forecast" items={weatherData.hourly} />
          <Forecast title="Daily Forecast" items={weatherData.daily} />
          <Footer shareScreenshot={shareScreenshot}/>

        </>
      )}
      
    </div>
  </>
  )
}

export default WeatherBox