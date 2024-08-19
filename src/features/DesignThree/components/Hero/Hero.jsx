import "./Hero.css";
import profileImg from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>Soy Lucy Jiménez,</span> Frontend developer
      </h1>
      <p>
        Soy una desarrolladora Frontend Junior de Colombia en busca de mi
        primera experiencia laboral.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact" className="anchor-link">
            Contactame
          </a>
        </div>
        <div className="hero-resume">Mi resume</div>
      </div>
    </div>
  );
};

export default Hero;
