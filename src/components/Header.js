import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";


const Header = () => {
  
  return (
    <>
    <div id="Home" className="header-wraper">
      <div className="main-info">
      <Particles
      id="tsparticles"
      // init={particlesInit}
      // loaded={particlesLoaded}
      // className='particles-canvas'
      params={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "45a29e"
            }
          },
          move: {
            enable: true
          },
          links: {
            enable: true,
            color: "#f4f4f4",
            distance: 150
          }
        }      
      }}
    />
        <h1>web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Facebook Ads",
            "Social Media Management",
            "Google Ads"
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a
          smooth={true}
          to="contacto"
          offset={-110}
          className="nav-link"
          href="#Contact"
          className="btn-main-offer"
        >
          Contact Me
        </a>
      </div>
    </div>
    </>
  );
        }


export default Header;