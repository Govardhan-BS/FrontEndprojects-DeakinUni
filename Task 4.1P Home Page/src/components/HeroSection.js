import React from 'react';
import { Image } from 'semantic-ui-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <Image 
          src="https://picsum.photos/1200/400?random=1" 
          alt="Hero Banner"
          className="hero-banner"
        />
        <div className="hero-overlay">
          <h1>Welcome to DEV@Deakin</h1>
          <p>Your community for developers, by developers</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 