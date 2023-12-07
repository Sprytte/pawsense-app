import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cat from './images/cat4.jpg';
import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import { useNavigate } from 'react-router-dom';

function Pet1Display({ pet }) {
  const navigate = useNavigate();

  let catImage;
  if (pet[0] === 2) {
    catImage = cat;
  } else if (pet[0] === 3) {
    catImage = cat1;
  } else if (pet[0] === 4) {
    catImage = cat2;
  } else if (pet[0] === 5) {
    catImage = cat3;
  }

  const handleViewDetails = () => {
    navigate(`/petDetails/${pet[0]}`);
  };
  return (
    <div className="card-container">
      <Card className="custom-card" style={{
        width: '18rem',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderStyle: "rounded",
        border: "2px #8c9ab7",
        padding: 15,
        background: 'rgb(231, 231, 231)'
      }}>
        <Card.Img variant="top" src={catImage} width={200} alt="" />
        <Card.Body>
          <Card.Title>Pet Name: {pet[1]}</Card.Title>
          <Card.Text>
            <p>Type: {pet[2]}</p>
            <p>Weight: {pet[3]} kg</p>
          </Card.Text>
          <Button style={{
            background: 'rgb(231, 231, 231)',
            color: 'black'
          }} onClick={handleViewDetails}>View details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pet1Display;
