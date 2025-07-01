import React from "react";
import "./About.css";
import image from "../../assets/beserk.png";
import mose from "../../assets/mo-se.svg";

const About = () => {
  return (
    <div className="about">
      <section>
        <div className="about-content1">
            
        <div className="main-head-text">
          <h1>
            Living affirmation that cognitive excellence pairs well with extreme
            physical reluctance.
          </h1>
        </div>
        <img src={image} alt="beserk" className="about-graphic" />
        </div>

        <div className="about-content2">
        <img src={mose} alt="mose" className="japanese-name" />
        <div className="about-sub-content">

          <p>
            A curious and methodical thinker, constantly exploring creativity
            and innovation in the realms of computer science and AI/ML.
          </p>
          <p>
            Moses is a student of Computer Science and AI/ML driven by a deep
            curiosity that fuels his passion for problem-solving and UI design.
            He thrives on prototyping new interfaces and experimenting with
            emerging tools, blending a structured approach with a spirit of
            discovery.
          </p>
          <p>
            His technical toolkit includes Python, HTML, and CSS, reflecting a
            solid foundation in programming and web technologies. Outside
            academics, Moses balances coding side projects with working out and
            immersing himself in anime culture. At heart, he is a coder refining
            his craft, a fitness enthusiast pushing his limits, and an anime fan
            savoring stories. Always learning — always driven by the endless
            possibilities of technology and design.
          </p>
          <p>Hope to creating projects that make me even lazier.</p>
        </div>

        
        </div>
      </section>
    </div>
  );
};

export default About;
