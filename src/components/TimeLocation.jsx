import React from 'react'
import { formatToLocalTime } from '../services/weatherservice';
import { motion } from 'framer-motion';
const TimeLocation = ({weatherData: {
    dt, name, timezone,country
}}) => {
    return (
        <div className="w-[95%] mx-auto lg:mx-0 lg:w-full">
            <div className="flex flex-row w-[90%] justify-center items-center mt-8">
                <motion.p 
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0, scale: 1}}
                transition={{duration: 1}}
                className="text-white text-normal text-center lg:text-xl font-extralight">{
                    formatToLocalTime(dt, timezone)
                }</motion.p>
            </div>
            <div className="flex items-center justify-center my-6">
                <motion.p 
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className="text-white text-3xl font-medium">{
                    name
                }, {
                    country
                }</motion.p>
            </div>
        </div>
    )
}

export default TimeLocation;