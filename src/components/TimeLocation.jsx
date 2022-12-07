import React from 'react'
import { formatToLocalTime } from '../services/weatherservice';

const TimeLocation = ({weatherData: {
    dt, name, timezone,country
}}) => {
    return (
        <div className="w-[95%] mx-auto lg:mx-0 lg:w-full">
            <div className="flex flex-row w-[90%] justify-center items-center mt-8">
                <p className="text-white text-normal text-center lg:text-xl font-extralight">{
                    formatToLocalTime(dt, timezone)
                }</p>
            </div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-3xl font-medium">{
                    name
                }, {
                    country
                }</p>
            </div>
        </div>
    )
}

export default TimeLocation;