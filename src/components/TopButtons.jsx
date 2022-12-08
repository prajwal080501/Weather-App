import React from 'react'

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
    <div className='flex rounded-md p-1 items-center justify-center my-6 w-[100%] scrollbar-hide lg:overflow-y-hidden overflow-x-scroll mx-auto lg:mx-0 lg:w-[100%] '>
        {cities.map((city) => (
            <button onClick={() => {
                setQuery({q: city.name})
            }} key={city.id} className='bg-transparent text-xs lg:text-lg duration-200 text-white hover:scale-110  font-semibold px-3 py-1 mx-1 lg:mx-2'>
                {city.name}
            </button>
        ))}
    </div>
  )
}

export default TopButtons