import React from 'react';
import './FaceRecog.css';

// const imgStyle = {
//   padding: '10px',
//   marginBottom: '25px',
//   borderRadius: '3px',
//   boxShadow: '0px 0px 10px 0 var(--darker)'
// }

const FaceRecog = ({imgUrl, box}) => {
  const boundingBox = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol
  }
  return (
    <div className="center ma flex justify-center">
      <div className="absolute mt2">
        <img id="inputimage" src={imgUrl} alt="" width="500px" height="auto" />
        <div className="bounding-box" style={boundingBox}></div>
      </div>
    </div>
  );
}

export default FaceRecog;
