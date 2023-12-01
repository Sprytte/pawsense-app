import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PetDetails() {
  const { petId } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  useEffect(() => {
    fetch(`/pets/${petId}`)
      .then(response => response.json())
      .then(data => setPetDetails(data))
      .catch(error => console.error('Error fetching pet details:', error));
  }, [petId]);

  if (!petDetails) {
    return <div className='app loading'>Loading...</div>;
  }

return (
        <div className='app'>
          <div className='app-header'>
            <h2>Pet Details</h2>
          </div>
          <div className='pet-info'>
            <p>Pet ID: {petDetails[0]}</p>
            <p>Pet Name: {petDetails[1]}</p>
            <p>Type: {petDetails[2]}</p>
            <p>Weight: {petDetails[3]} kg</p>
          </div>
        </div>
      );
    }

export default PetDetails;
