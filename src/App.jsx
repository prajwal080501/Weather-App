import React from 'react'
import {TiWeatherCloudy} from 'react-icons/ti'
import html2canvas from 'html2canvas';

import Home from './pages/Home';
const App = () => {


  const downloadImage = (data, filename = 'weather.png') => {
    const a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div>
        <Home id="canvas" />
       
    </div>
    
  )
}

export default App;