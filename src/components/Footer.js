import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  Git
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Lagos - Nigeria</p>
            </div>
            <div className="d-flex">
              <a href="tel:3214466552">+234 810 321 8560</a>
            </div>
            <div className="d-flex">
              <p>razak2free@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href="#Home"> Home </a>
                <br />
                <a className="footer-nav" href="#Portfolio"> Portfolio</a>
                <br />
                <a className="footer-nav" href="#C4">About Me</a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav" id="#Contact"> Contact Me</a>
                <br />
                <a className="footer-nav" href="#Services">Services</a>
                <br />
                <a className="footer-nav" href="">Reviews</a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://web.facebook.com/profile.php?id=100008466552812"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#WorldDeveloper"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/balogun-razak-638b67178/"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#WorldDeveloper"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://wa.link/n3h0ak"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#WorldDeveloper"            
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <TwitterShareButton
                url={"https://twitter.com/razak2free"}
                quote={"Clinica Nieves Excelencia Vascular"}
                hashtag="#WorldDeveloper"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Corrupt Organization | 
              <br />
              <p>Balogun Razak</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;