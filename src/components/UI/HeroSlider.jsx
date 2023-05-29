import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 4500,
    autoplaySpeed: 4500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">En Serviteca Magallanes realizamos todo tipo de servicios relacionados con mantención para Autos y Camionetas.</h4>
            <h1 className="text-light mb-4">Taller Mecánico Automotriz</h1>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Revisión y Reparación de autos en minutos</h4>
            <h1 className="text-light mb-4">Mécanicos expertos</h1>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Realizamos scanner profesional a todas las marcas del mercado</h4>
            <h1 className="text-light mb-4">Scanner multimarcas</h1>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
