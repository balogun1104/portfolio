import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//avatars imports
import avatar1 from "../imagenes/avatars/avatar-1.png";
import avatar2 from "../imagenes/avatars/avatar-2.png";
import avatar3 from "../imagenes/avatars/avatar-3.png";
import avatar4 from "../imagenes/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="avantar clinica nieves" />
        <div className="myCarousel">
          <h3>Taiwo Daniel</h3>
          <p>
            Best in the Field his highly recommended.{" "}
          </p>
        </div>
      </>

      <>
        <img src={avatar2} alt="avantar clinica nieves" />
        <div className="myCarousel">
          <h3>Lawal Boluwatife</h3>
          <p>
           very good with what he does, his time management is amazing .{" "}
          </p>
        </div>
      </>

      <>
        <img src={avatar3} alt="avatar clinica nieves" />
        <div className="myCarousel">
          <h3>Ajavon Dennis</h3>
          <p>Very Professional. </p>
        </div>
      </>

      <>
        <img src={avatar4} alt="avantar clinica nieves" />
        <div className="myCarousel">
          <h3>Adetayo Adebayo</h3>
          <p>
           Very easy to contact and to communicate with .{" "}
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
