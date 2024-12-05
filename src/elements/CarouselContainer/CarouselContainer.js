import React from "react";
import "./CarouselContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import Imagem from "../../assets/imagem1.jpg";
import Imagem2 from "../../assets/imagem2.jpg";
import Imagem3 from "../../assets/imagem3.jpg";

const CarouselContainer = () => {
  return (
    <div className="box_banner">
      <ResponsiveCarousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={5000}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button className="arrow prev" onClick={clickHandler}>
              ❮
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button className="arrow next" onClick={clickHandler}>
              ❯
            </button>
          )
        }
      >
        <div>
          <img src={Imagem} alt="Slide 1" />
        </div>
        <div>
          <img src={Imagem2} alt="Slide 2" />
        </div>
        <div>
          <img src={Imagem3} alt="Slide 3" />
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default CarouselContainer;
