import { TiWeatherCloudy } from 'react-icons/ti'
import {HiMenuAlt4} from 'react-icons/hi'
import React from 'react'
import {useContext} from 'react'
import { UserContext } from '../App'
import { GoogleLogin } from '@react-oauth/google'
const MobileMenu = ({handleLogout, getUserDetails}) => {
  const user = useContext(UserContext);
  return (
    
    // mobile navbar
    <>
    <div className="lg:hidden w-screen sticky top-0 z-10 h-fit px-3 flex items-center bg-gray-100
    dark:bg-gray-900 dark:text-white shadow-md">
        <div className="flex items-center flex-1 justify-start">
        <TiWeatherCloudy className="text-white m-4 bg-blue-500 h-10 px-2 rounded-full shadow-md w-10 hover:scale-105 hover:bg-blue-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />
        <p className="xs:text-base sm:text-xl cursor-pointer font-bold font-sans">
            Weather App
        </p>
        </div>
        {/* display logout button and user name and profile */}
       {
          user.name ? (
            <div className="flex items-center flex-1 justify-end space-x-3 lg:space-x-5">
            {/* logout button */}
            <button onClick={handleLogout} className="bg-blue-500 text-white px-3 active:scale-95 text-sm py-1 rounded-md drop-shadow-lg hover:bg-blue-600 duration-200">Logout</button>
            <p className="text-lg font-medium">{
              // display first word of name
              user.name ? user.name.split(' ')[0] : ''
            }
            </p>
            <img src={user.picture} alt="" className="h-10 w-10 rounded-full" />
            </div>
          ) : (
            <GoogleLogin
          onSuccess={response => {
            console.log(response);
            localStorage.setItem('token', response.credential);
            getUserDetails();
          }}
          useOneTap
        />
          )
       }
    </div>
        </>
  )
}

export default MobileMenu