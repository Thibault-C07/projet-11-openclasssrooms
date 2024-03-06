import React from 'react'
import '../styles/Card.css';
import LogementsCard from './Logements-card';
import logementsData from '../data/logements.json';

const Card = () => {
  return (
    <div className="back-card">
      <div className="grid-container">
        {logementsData.map((logement) => (
          <LogementsCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;