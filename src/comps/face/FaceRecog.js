import React from 'react';

const imgStyle = {
  maxWidth: '100%',
  height: 'auto',
  padding: '10px',
  marginBottom: '25px',
  borderRadius: '3px',
  boxShadow: '0px 0px 10px 0 var(--darker)'
}

const FaceRecog = ({imgUrl}) => {
  return (
    <div className="FaceRecog">
      { imgUrl
        ? <img src={imgUrl} alt="face detect" style={imgStyle}/>
        : null
      }
    </div>
  );
}

export default FaceRecog;
