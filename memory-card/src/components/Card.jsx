import React from 'react';
import '../styles/Card.css';

const Card = ({ pokemon, handleClick, isFlipped }) => {
    return (
      <div className="card" onClick={() => handleClick(pokemon)}>
        {isFlipped ? (
          <>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </>
        ) : (
          <div className="card-back" />
        )}
      </div>
    );
  };
  
  export default Card;