import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from './Navbar';
import MyFoodChart from './FoodBowlGraph';
function PetDetails() {
  const { petId } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  useEffect(() => {
    fetch(`/pets/${petId}`)
      .then(response => response.json())
      .then(data => setPetDetails(data))
      .catch(error => console.error('Error fetching pet details:', error));
  }, [petId]);

  const [weightsData, setWeightsData] = useState({});
  //depending on the petid, it will display the weight and time for the specific one
  useEffect(() => {
    fetch(`/foodBowlWeight/${petId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeightsData(data);
      })
      .catch(error => console.error('Error fetching weight:', error));
  }, [petId]);
  

  if (!petDetails) {
    return <div className='app loading'>Loading...</div>;
  }

return (
        <div className='pet-details'>
           <NavigationBar/>
          <div className='app-header'>
            <h2>Pet Details</h2>
          </div>
          <div className='pet-info'>
            <p>Pet ID: {petDetails[0]}</p>
            <p>Pet Name: {petDetails[1]}</p>
            <p>Type: {petDetails[2]}</p>
            <p>Weight: {petDetails[3]} kg</p>
            Graph:
           <MyFoodChart weightsData={weightsData} />
          </div>
        </div>
      );
    }

export default PetDetails;
