import React from 'react';
// import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma5 mt1">
      <Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }}>
        <div className="pa3">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
