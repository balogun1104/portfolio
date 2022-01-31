import React from "react";
import author from "../Me.png";

const AboutMe = () => {
  return (
    <div id="C4" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              className="profile-img"
              src={author}
              alt="dr ernesto nieves imagen"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <div className="d-flex justify-content-center">
            <div className="skills">
            Hello my name is Balogun Razak I am a Junior Full Stack Developer with 3 years’
            experience building and deploying web applications, also with intermediate 
            skill as a Data Analyst. I am diligent,
            hardworking with a good sociability working with teams.{" "}
            </div>
          </div>

          <h1 className="about-heading">Skills</h1>
          <div className="d-flex justify-content-center">
            <div className="skills">
          ● JavaScript
          ● Html
          ● CSS
          ● React JS
          ● Git
          ● Python Advanced
          ● Wordpress
          ● Node JS
          ● Bootstrap
          ● Tailwind
          ● Data visualization and analysis  
          ● Data Technologies

            {" "}
            </div>
          </div>
          {/* <p className="d-flex justify-content-center">
            {" "}
            Para ti que buscas el mejor tratamiento, en clínica nieves cuento
            con la mejor tecnología para ofrecerte procedimientos ambulatorios,
            avanzados y de calidad.{" "}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;