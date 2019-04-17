import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div className="Rank">
      <h2>{`${name}, your rank is...`}</h2>
      <h1>{`# ${entries}`}</h1>
    </div>
  );
}

export default Rank;
