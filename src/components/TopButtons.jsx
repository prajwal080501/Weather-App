import React from 'react'
import {motion} from 'framer-motion'
const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id:1,
            name: 'London',
        },
        {
            id:2,
            name: 'Mumbai',
        },
        {
            id:3,
            name: 'Pune',
        },
        {
            id:4,
            name: 'New York',
        },
        {
            id:5,
            name: 'Beijing',
        }
    ]
  return (
    <motion.div
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1}}
     className='flex rounded-md p-1 items-center justify-center my-6 w-[100%] scrollbar-hide lg:overflow-x-hidden overflow-x-scroll mx-auto lg:mx-0  '>
        {cities.map((city) => (
            <button onClick={() => {
                setQuery({q: city.name})
            }} key={city.id} className='bg-transparent text-xs lg:text-lg duration-200 text-white hover:scale-110  font-semibold px-3 py-1 mx-1 lg:mx-2'>
                {city.name}
            </button>
        ))}
    </motion.div>
  )
}

export default TopButtons