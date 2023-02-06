import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Diana Boutique | All rights reserverd</p>
      <p className="icons">
        <AiOutlineFacebook />
        <AiFillInstagram />
      </p>
    </div>
  )
}

export default Footer