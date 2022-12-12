import React from 'react'
import { TiWeatherNight, TiWeatherPartlySunny, TiWeatherSunny } from 'react-icons/ti';
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { UserContext } from '../App';
const Greet = () => {
    const user = useContext(UserContext);
    function getGreeting() {
        let today = new Date();
        let curHr = today.getHours();

        if (curHr < 12) {
            return `Good Morning ${
                user.name ? user.name : ''
            }`;
        } else if (curHr < 18) {
            return `Good Afternoon ${user.name ? user.name : ''}`;
        }
        else if (curHr < 22) {
            return `Good Evening ${
                user.name ? user.name : ' '
            }`;
        }
        else {
            return `Good Night ${user.name ? user.name : ''}`;
        }
    }

    const handleIcon = () => {
        let today = new Date();
        let curHr = today.getHours();

        if (curHr < 12) {
            return <TiWeatherSunny className="text-white animate-spin text-center opacity-50 m-4 bg-yellow-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-yellow-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        } else if (curHr < 18) {
            return <TiWeatherPartlySunny className="text-white m-4 bg-yellow-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-yellow-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        } else {
            return <TiWeatherNight className="text-white m-4 bg-yellow-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-yellow-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='bg-transparent w-full h-fit pt-8'>
            <div className='flex flex-row flex-1 items-center justify-center'>
                <motion.p
                    initial={{ opacity: 0, y: -100, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-xl lg:text-3xl font-semibold text-center text-white/50">{
                        getGreeting()
                        // morning icon from openweather api
                    }</motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -100, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {handleIcon()}
                </motion.p>
            </div>
        </motion.div>
    )
}

export default Greet