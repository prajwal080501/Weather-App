import React from 'react'
import {BsCloudsFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
const Clouds = () => {
  return (
    <>
    <div className='hidden lg:inline absolute top-20 -z-10'>
        {/* add moving clouds */}
        <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
         className='flex flex-row items-center justify-center'>
            <BsCloudsFill className='text-white/30 text-6xl animate-[clouds] duration-2000' />
            </motion.div>
            <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
         className='flex flex-row items-center justify-center '>
            <BsCloudsFill className='text-white/30 text-6xl animate-[clouds] duration-2000' />
            </motion.div>
            <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
         className='flex flex-row items-center justify-center '>
            <BsCloudsFill className='text-white/30 text-6xl animate-[clouds] duration-2000' />
            </motion.div>
    </div>
    <div className='hidden lg:inline absolute top-20 right-50 lg:right-80 w-96 -z-10'>
        {/* add moving clouds */}
        <motion.div
            animate={{ x: [0, 80, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
         className='flex flex-row items-center justify-center'>
            <BsCloudsFill className='text-white/30 text-6xl animate-[clouds] duration-2000' />
            </motion.div>
            <motion.div
            animate={{ x: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
         className='flex flex-row items-center justify-center '>
            <BsCloudsFill className='text-white/30 text-6xl animate-[clouds] duration-2000' />
            </motion.div>
            <motion.div
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
         className='flex flex-row items-center justify-center '>
            <BsCloudsFill className='text-white/30 text-6xl animate-[clouds] duration-2000' />
            </motion.div>
    </div>
    </>
  )
}

export default Clouds