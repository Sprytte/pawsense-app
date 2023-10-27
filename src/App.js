import React, { useState, useEffect } from 'react';
import PetsList from './Components/PetsList';
import axios from 'axios';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data);
      setCurrentTime(data.time);
    });
  }, []);

  

  return (
    <div className="App">
      
        <p>The current time is {currentTime}.</p>
        
        <PetsList/>
    </div>
  );
}

export default App;