import React from 'react';
import './Form.css';

const ImageLinkForm = ({onInputChange, onFormSubmit}) => {
  return (
    <div className="ImageLinkForm">
      <p className="intro">
        {`Enter an image URL below, and we'll detect any faces on it`}
      </p>
      <form className="form" onSubmit={onFormSubmit}>
        <input className="input" type="text" onChange={onInputChange}/>
        <button className="detect">Detect</button>
      </form>
    </div>
  );
}

export default ImageLinkForm;
