import React from "react";
import netflix from "../imagenes/netflix.png";
import cityGuide from "../imagenes/cityGuide.png";
import portfolio from "../imagenes/portfolio.png";
import taskManager from "../imagenes/taskManager.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// react popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //netflix

  const openPopuboxNetflix = () => {
    const content = (
      <>
      <div id="Portfolio">

      
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="flebo-suite en clinica nieves yopal"
        />
        <p id="Portfolio">
          Una Flebo-Suite moderna, amplia, donde cryo-escleroterapia y el laser
          hacen su magia.{" "}
        </p>
        <b>Tratamiento Cryo-Laser Cryo-Escleroterapia </b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=80VkehBP4PY", "_blank")
          }
        >
          video{" "}
        </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //cityGuide
<br />
  const openPopuboxcityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="clinica nieves yopal vista exterior"
        />
        <p>Una de las mejores clinicas de venas de latinoamerica. </p>
        <b>clinica nieves</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=maXpQJqCM2A", "_blank")
          }
        >
          video{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigcityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide  imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //portfolio

  const openPopuboxportfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="la imagen portfolio"
        />
        <p>Tratamientos que funcionan requieren tecnologia y saber. </p>
        <b>Excelencia Vascular</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=VpPQLi5a4Yw", "_blank")
          }
        >
          video{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigportfolio = {
    titleBar: {
      enable: true,
      text: "portfolio  imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //taskManager

  const openPopuboxtaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="la imagen taskManager"
        />
        <p>Un quirofano moderno para los retos de la cirugía vascular. </p>
        <b>Cirugia LASER endovenosa</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=JztgZWtr_W4&t=182s",
              "_blank"
            )
          }
        >
          video{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigtaskManager = {
    titleBar: {
      enable: true,
      text: "el Mejor Curso LASER y Escleroterapia para Telangiectasias",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <div id="Portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">
         Portfolio
        </h1>
        <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">
          <div className="portfolio-image-box" onClick={openPopuboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopuboxcityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopuboxportfolio}>
            <img className="portfolio-image" src={portfolio} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopuboxtaskManager}>
            <img className="portfolio-image" src={taskManager} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigcityGuide} />
      <PopupboxContainer {...popupboxConfigportfolio} />
      <PopupboxContainer {...popupboxConfigtaskManager} />
    </div>
  );
};

export default Portfolio;