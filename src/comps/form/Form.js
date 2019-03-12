import React from 'react';
import './Form.css';

const ImageLinkForm = ({onInputChange}) => {
  return (
    <div className="ImageLinkForm">
      <p className="intro">
        {`Enter an image URL below, and we'll detect any faces on it`}
      </p>
      <div className="form">
        <input className="input" type="text" onChange={onInputChange}/>
        <button className="detect">Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
