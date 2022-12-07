import React from 'react'
import { iconUrlFromCode } from '../services/weatherservice'

const Forecast = ({title, items}) => {
  return (
    <div className="px-4 md:px-0">
      <div className="flex item-center pb-5 justify-start mt-6 text-white text-2xl font-light py-3">
        <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between text-white">
          {items.map((item) => (
          <div className='flex flex-col items-center justify-center'>
            <p className=' font-medium text-sm'>{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt=""  className='h-10 w-10'/>
            <p className='font-medium text-sm'>{item.temp.toFixed()}°</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Forecast