import React from 'react'
import {TiWeatherCloudy} from 'react-icons/ti'
import html2canvas from 'html2canvas';
import Home from './pages/Home';
const App = () => {
  return (
    <div className='dark:bg-gray-900 h-fit'>
        <Home id="canvas" />
       
    </div>
    
  )
}

export default App;