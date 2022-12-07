import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { motion } from 'framer-motion';
const Input = ({setQuery, units, setUnits}) => {
    const [city, setCity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery({q: city})
    }

    const handleUnit = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit){
            setUnits(selectedUnit)
        }
        console.log(units, 'from input')
    }

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setQuery({lat: position.coords.latitude, lon: position.coords.longitude})
        })
    }

    useEffect(() => {
        handleLocation();
    }, [setQuery])

    const handleSubmitHidden = (e) => {
        e.preventDefault();
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-row justify-center w-[90%] mx-auto lg:mx-0 lg:w-full items-center my-6 space-x-2">
            <form onSubmit={handleSubmitHidden} className="flex flex-row w-[90%] lg:w-3/4 items-center justify-center space-x-5">
                <input value={city} onChange={
                    (e) => setCity(e.target.value)
                } type="text" className="w-full rounded-md p-2 bg-white text-black font-extralight outline-none placeholder-gray-400 shadow-lg  capitalize placeholder:lowercase focus:shadow-sm duration-200 ease-linear" placeholder="Search Location" />
                <AiOutlineSearch onClick={handleSearch} size={34} className="text-2xl text-white cursor-pointer hover:scale-125 duration-200" />
                <GoLocation onClick={handleLocation} title="Access your location" size={25} className="text-2xl text-white cursor-pointer hover:scale-125 duration-200" />
            {/* add a hidden button for submitting on enter press */}
            <button type="submit" />
            </form>
            <div className="flex flex-row w-1/4 -ml-8 items-center justify-center">
                <button name="metric" onClick={
                    handleUnit
                }  className="text-xl hover:scale-125 duration-200 text-white font-light">
                    <span className="text-2xl font-light">°C</span>
                </button>
                <p className="text-2xl font-light mx-2 text-white"> | </p>
                <button name="imperial" onClick={handleUnit}  className="text-xl text-white hover:scale-125 duration-200 font-light">
                    <span className="text-2xl font-light">°F</span>
                </button>
            </div>
        </motion.div>
    )
}

export default Input