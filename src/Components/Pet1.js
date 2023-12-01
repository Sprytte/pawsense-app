// Pet1Display.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cat from './images/catImg.jpg';
import { useNavigate } from 'react-router-dom';

function Pet1Display({ pet }) {
  const navigate = useNavigate();

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
        padding: 15
      }}>
        <Card.Img variant="top" src={cat} width={200} alt="" />
        <Card.Body>
          <Card.Title>Pet Name: {pet[1]}</Card.Title>
          <Card.Text>
            <p>Type: {pet[2]}</p>
            <p>Weight: {pet[3]} kg</p>
          </Card.Text>
          <Button variant="primary" onClick={handleViewDetails}>View details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pet1Display;
