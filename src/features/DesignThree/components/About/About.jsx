import "./About.css";
import designUten from "../../assets/design-uten.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>Acerca de mi</h1>
        {/* <img src={designUten} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={designUten} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              corporis quos vero illo possimus cupiditate consectetur itaque
              eius eum laudantium atque ex magni, laboriosam doloremque rem,
              praesentium harum numquam vel!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in
              quisquam voluptatibus?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>AÑOS APRENDIENDO</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>EJERCICIOS TERMINADOS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
