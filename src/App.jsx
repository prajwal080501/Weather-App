import React, { useEffect, useState } from 'react'
import Home from './pages/Home';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Terms from './components/Terms';
import About from './components/About';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
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
    <Router>
    <UserContext.Provider value={user}>
    <Navbar handleLogout={handleLogout} getUserDetails={getUserDetails} />
    <MobileMenu handleLogout={handleLogout} getUserDetails={getUserDetails} />
    <div className='dark:bg-gray-900 h-fit'>
         {/* display google button if no user exists */}
         <Routes>
      <Route path='/' element={<Home handleLogout={handleLogout} getUserDetails={getUserDetails} />} />
      
      <Route path="/terms" element={<Terms/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
    </UserContext.Provider>
    </Router>

  )
}

export default App