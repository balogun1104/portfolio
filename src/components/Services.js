import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYelp,
  faVine,
  faFreeCodeCamp,
  faTencentWeibo,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="Services" className="services">
      <h1 className="py-5"> Services </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faYelp}
                  size="2x"
                />{" "}
              </div>
              <h3>Web/Mobile Development</h3>
              <p>I'm here to help you fix it. Track errors in all major languages & frameworks. Open-source error tracking that 
                helps developers monitor and fix crashes in real time. {" "} </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faVine}
                  size="2x"
                />{" "}
              </div>
              <h3>Analytics Interpretation And Reporting</h3>
              <p>
               I'm help you organize your data and focus your analysis.{" "}
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFreeCodeCamp}
                  size="2x"
                />{" "}
              </div>
              <h3>Competition monitoring</h3>
              <p>I Analyze competitions on social media ·
                 Track competitors online · Monitor brand mentions · {" "}</p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faTencentWeibo}
                  size="2x"
                />{" "}
              </div>
              <h3>Blog Customization And Management {" "}</h3>
              <p>I'm help your blog gain advertisers and can also boost your
                 status as an online influencer, which can open up the door 
                 for affiliate marketing.  {" "}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;