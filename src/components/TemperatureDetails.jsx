import React from 'react'
import {TbTemperature as Temperature} from 'react-icons/tb'
import {BiDroplet as Humidity, BiWind as Wind} from 'react-icons/bi'
import {BsSun as Sun, BsCloudSun as CloudSun} from 'react-icons/bs'
import { formatToLocalTime } from '../services/weatherservice'
import { motion } from 'framer-motion'
const TemperatureDetails = ({weatherData: {
    details, sunrise, sunset,timezone, temp_min, temp_max, icon, humidity, temp, feels_like, speed}}) => {
    return (
        <motion.div
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1}}
         className="w-[90%] lg:w-full mx-auto lg:mx-0">
            <div className="flex  flex-row justify-center items-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>
            <div className='flex tracking-wider flex-row items-center justify-between text-white py-3 '>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="sun" className="w-20 h-20" />
                    <p className=" text-2xl md:text-6xl font-extralight">{temp.toFixed()}°</p>
                <div className='flex flex-col bg-black/20 backdrop:blur-md p-2 lg:p-4 rounded-lg drop-shadow-xl space-y-3 leading-4'>
                   <div className='flex font-light text-sm items-center justify-between'>
                    <Temperature size={20} className="text-white mr-1"/>
                    Real Feel: <span className='font-medium ml-1'>{feels_like}°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-between'>
                    <Humidity size={20} className="text-white mr-1"/>
                    Humidity: <span className='font-medium ml-1'>{humidity}%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-between'>
                    <Wind size={20} className="text-white mr-1"/>
                    Wind: <span className='font-medium ml-1'>{speed} km/h</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3 my-4">
                <Sun size={18} className="text-white mr-1"/>
                <p className="font-light">
                    Rise: {" "}
                    <span className='font-medium ml-1'>
                        {formatToLocalTime(sunrise, timezone, "HH:mm a")}
                    </span>
                </p>
                <p className="text-white text-sm font-light">|</p>
                <Sun size={18} className="text-white mr-1"/>
                <p className="font-light">
                    Set: {" "}
                    <span className='font-medium ml-1'>
                        {formatToLocalTime(sunset, timezone, "HH:mm a")}
                    </span>
                </p>
                <p className="text-white text-sm font-light">|</p>
                <CloudSun size={18} className="text-white mr-1"/>
                <p className="font-light">
                    High: {" "}
                    <span className='font-medium ml-1'>
                        {temp_max.toFixed()}°
                    </span>
                </p>
                <p className="text-white text-sm font-light">|</p>
                <CloudSun size={18} className="text-white mr-1"/>
                <p className="font-light">
                    Low: {" "}
                    <span className='font-medium ml-1'>
                        {temp_min.toFixed()}°
                    </span>
                </p>
            </div>
        </motion.div>
    )
}

export default TemperatureDetails