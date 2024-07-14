import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ score }) => {
    return (
      <div className="scoreboard">
        <p>Score: {score}</p>
      </div>
    );
  };
  export default Scoreboard;