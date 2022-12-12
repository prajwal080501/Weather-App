import React, { useEffect, useState } from 'react'
import Home from './pages/Home';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
export  const UserContext = React.createContext();
const App = () => {
  const [user, setUser] = useState({});
  const getUserDetails = async () => {
    const token = await localStorage.getItem('token');
    const decoded = await jwt_decode(token);
    setUser(decoded);
    // save user details to local storage
  }

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('token');
    setUser({});
  }
// create a context for user details

  return (
    <UserContext.Provider value={user}>
    <div className='dark:bg-gray-900 h-fit'>
         {/* display google button if no user exists */}
      <Home handleLogout={handleLogout} getUserDetails={getUserDetails}/>
    </div>
    </UserContext.Provider>

  )
}

export default App