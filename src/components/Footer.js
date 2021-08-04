import React from 'react';
import '../styles/footer.css';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP, FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => (
  <div>
    <div className="footer">
      <FaTwitter className="icons" />
      <FaFacebookF className="icons" />
      <FaGooglePlusG className="icons" />
      <FaPinterestP className="icons" />
      <FaWhatsapp className="icons" />
    </div>
    <p className="copyright">@2021 Sharon</p>
  </div>
);

export default Footer;
