import React, { useState, useEffect } from 'react';

const PetsList = () => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        fetch('/pets').then(res => res.json()).then(data => {
          console.log(data);
          setPets(data);
        });
      }, []);

  const renderPets = () => {
    const listItems = [];
    for (let row = 0; row < pets.length; row++) {
        //for(let col = 0; col < pets[row].length; col++){
            listItems.push(<li key={row}>{pets[row]}</li>);
        //}
    }
    return listItems;
  };

//   const renderPetDetails = () => {
//     const listItems = [];
//     for (let i = 0; i < renderPets().length; i++) {
//         if(i == 0){
//             listItems.push(<h1>{renderPets()[i]}</h1>)
//         }
//       listItems.push({renderPets()[i]});
//     }
//     return listItems;
//   };

  return(
    <ul>
        {pets.map(pet => (
            //renderPets()
            <div>
                <h1>Pet name: {pet[1]}</h1>
                <ul>
                    <li>Pet type: {pet[2]}</li>
                    <li>Pet weight: {pet[3]} kg</li>
                </ul>
            </div>
        ))}
    </ul>
  ) 
}
export default PetsList;