import { GoogleLogin } from '@react-oauth/google';
import React from 'react'
import { TiWeatherCloudy } from 'react-icons/ti'
import { useContext } from 'react';
import { UserContext } from '../App';
import {Link} from 'react-router-dom';
const Navbar = ({ handleLogout, getUserDetails }) => {
  const user = useContext(UserContext);
  return (
    console.log(user),
    <div className="hidden lg:inline-flex sticky top-0 z-20 w-screen h-[10vh] px-3 items-center bg-gray-100 drop-shadow-md 
    dark:bg-gray-800 dark:text-white dark:drop-shadow-none
    ">
      <div className="flex items-center flex-1">
        <TiWeatherCloudy className="text-white m-5 bg-blue-500 h-12 px-2 rounded-full shadow-md w-12 hover:scale-105 hover:bg-blue-600 duration-200 cursor-pointer hover:ring-4 hover:ring-white hover:shadow-md" />

        <Link to="/" className="text-3xl cursor-pointer font-bold font-sans">
          Weather App
        </Link>

      </div>
      <div className="flex list-none space-x-10 items-center flex-1 justify-center text-xl font-medium ">
        <Link to="/about" className="cursor-pointer hover:text-blue-400 duration-200">About</Link>
        <li className="cursor-pointer hover:text-blue-400 duration-200">Docs</li>
        <li className="cursor-pointer hover:text-blue-400 duration-200">Contact</li>
      </div>
      <div className="flex space-x-5 items-center w-fit justify-center">
        {
          user.name ? (
            <button onClick={handleLogout} className="bg-blue-500 active:scale-95 active:shadow-sm text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 duration-200">Logout</button>
          ) : (
            <div className='flex justify-center'>
            <GoogleLogin
            // automatic login
            auto_select
          onSuccess={response => {
            console.log(response);
            localStorage.setItem('token', response.credential);
            getUserDetails();
          }}
          useOneTap
        />

          </div>
          )
        }
      </div>
      {/* display name and profile photo */}
      {user.name && <div className="flex items-center space-x-5 flex-1 justify-center">
        <p className="text-xl font-medium">{user.name}</p>
        <img src={user.picture} alt="" className="h-10 w-10 rounded-full" />
        </div>}
    </div>
  )
}

export default Navbar