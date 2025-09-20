import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="/image.png" alt="Deakin Banner" className="banner-image" />

      <div className="banner-cta">
        <div className="banner-cta-box">
          <h2 className="banner-title">Unlock Premium Features</h2>
          <p className="banner-sub">
            Messages & banners, themes, content controls, analytics dashboard and more.
          </p>
          <Link to="/plans" className="banner-button">View Plans</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
