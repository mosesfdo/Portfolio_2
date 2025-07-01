import React from 'react';
import './Hero.css';
import image from '../../assets/main-picture.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="hero">
        <div>
          <section>
            <p>
                Hi, Im Moses and Im a student
            </p>

            <h1>
                Ai Engineer
                & Web Developer.
            </h1>
            </section>
        </div>
      <img src={image} alt="" className="hero-image" />
    </div>
  );
};

export default Hero;