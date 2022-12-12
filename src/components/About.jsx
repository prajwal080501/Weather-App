import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion';
const About = () => {
  return (
    // modern looking about page
    <div className="bg-white dark:bg-gray-900 h-screen flex items-center">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        
        className="flex flex-col bg-black/40 shadow-2xl w-1/2 items-center mx-auto p-5 rounded-md justify-center h-fit">
            <div className="flex  flex-col items-center justify-center space-y-3">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About</h1>
                <p className="text-gray-600 dark:text-gray-400 text-center">This is a weather app made with React and Tailwind CSS. Data made availabe with the help of Open Weather Map Api.
                </p>
            </div>
            {/* links for source code */}
            <div className="flex flex-col items-center justify-center space-y-3">
                <div className="flex space-x-3 pt-5">
                    <a href="#" className="text-blue-500 hover:text-blue-600">Github</a>
                    {/* github icon react icon */}
                    <BsGithub className="text-2xl text-gray-800 dark:text-white" />
                    </div>
                    </div>
        </motion.div>
    </div>
  )
}

export default About