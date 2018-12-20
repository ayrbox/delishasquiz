import React from 'react';
import { Link } from 'react-router-dom';

const goTo = (url) => {
  window.open(url);
};

const Footer = () => (
  <div className="footer-container">
    <div className="container mb-3 mt-3">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <button
            type="button"
            className="btn btn-link nav-link"
            onClick={() => goTo('https://github.com/ayrbox/mathsquiz/blob/master/LICENSE')}
          >
            &copy; 2018
          </button>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">Settings</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn btn-link nav-link"
            onClick={() => goTo('https://github.com/ayrbox/mathsquiz')}
          >
            Source
          </button>
        </li>
      </ul>
    </div>
  </div>
);


export default Footer;
