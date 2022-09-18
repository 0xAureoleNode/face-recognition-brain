import React from 'react';
// import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import icon from './icon.png';

const Logo = () => {
  return (
    <div className="ma5 mt1">
      <Tilt className="Tilt br2 shadow-2" style={{ height: 100, width: 100 }}>
        <div className="pa3">
          <img src={icon} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
