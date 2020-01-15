import React from 'react';
//import logo from '../../../assets/images/Breaking_Bad_logo.png';
import logo from '../../../assets/images/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <h1 className="logo">
      <figure>
        <img src={logo} alt="logo Breacking Bad" />
      </figure>
    </h1>
  );
};

export default Logo;
