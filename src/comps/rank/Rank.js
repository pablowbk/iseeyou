import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div className="Rank">
      <h2>{`Hi ${name}! Your total count is...`}</h2>
      <h1>{`# ${entries}`}</h1>
      { entries > 0 ? <h2>faces detected!</h2> : null }
    </div>
  );
}

export default Rank;
