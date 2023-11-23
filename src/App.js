import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Pet1Display from './Components/Pet1';
import NavigationBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyChart from './Components/Graph';
import Footer from './Components/Footer';

function Home() {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data);
      setCurrentTime(data.time);
    });
  }, []);

  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch('/pets').then(res => res.json()).then(data => {
      console.log(data);
      setPets(data);
    });
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <h1>Welcome to PawSense</h1>
        <p>Where you can track the amount of food you feed to your pet</p>
        <p>Choose one of your pets:</p>
      </header>
      <div className="card-container">
        {pets.map(pet => (
          <Pet1Display key={pet.id} pet={pet} />
        ))}
        <p>The current time is {currentTime}.</p>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const [weightsData, setWeightsData] = useState({});
  //fetch the weight data from backend, doing it in App because does not recognize in home component
  useEffect(() => {
    fetch('/Weights')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeightsData(data);
      })
      .catch(error => console.error('Error fetching weight:', error));
  }, []);

  return (
    <Router>
      <div className="App">       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weights" element={<MyChart weightsData={weightsData}/>} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
