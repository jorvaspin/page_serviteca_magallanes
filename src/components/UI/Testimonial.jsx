import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description_testimonial">
           Buen servicio, mecánico sincero en recomendación de que es mejor para el coche un cliente más 👍
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src='https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685489853/147142_jpni3q.png' alt="" className="w-25 h-25 rounded-2 avatar" />

          <div>
            <h6 className="mb-0 mt-3">Esteban Rojas</h6>
            <p className="section__description">Cliente</p>
            <img className="rating" src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685490513/5-Star-Rating-Review-Transparent-PNG-removebg-preview_stutay.png" alt="" />
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description_testimonial">
         Excelente atención, muy claros en el diagnóstico y muy rápidos en realizar el trabajo además de ser muy amables, lo recomiendo totalmente
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src='https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685490122/icon-6007530_640_xqfeo9.png' alt="" className="w-25 h-25 rounded-2 avatar" />

          <div>
            <h6 className="mb-0 mt-3">Gabriela Maccio</h6>
            <p className="section__description">Clienta</p>
            <img className="rating" src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685490513/5-Star-Rating-Review-Transparent-PNG-removebg-preview_stutay.png" alt="" />
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description_testimonial">
          Excelente atención, el señor que está en la oficina, nos atendió muy amable y educadamente.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src='https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685489853/147142_jpni3q.png' alt="" className="w-25 h-25 rounded-2 avatar" />

          <div>
            <h6 className="mb-0 mt-3">Patricio Otárola</h6>
            <p className="section__description">Cliente</p>
            <img className="rating" src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685490513/5-Star-Rating-Review-Transparent-PNG-removebg-preview_stutay.png" alt="" />
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description_testimonial">
          Hoy fui ha realizar a mi vehículo montaje, alineación  y balanceo  de mi automóvil,  buen precio atención excelente Don Jorge dueño  y su hijo preocupados en cada momento de los clientes el personal que trabaja explica cada detalle a los clientes de los detalles de sus autos , 100% recomendable .
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src='https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685489853/147142_jpni3q.png' alt="" className="w-25 h-25 rounded-2 avatar" />

          <div>
            <h6 className="mb-0 mt-3">Luis Salinas</h6>
            <p className="section__description">Cliente</p>
            <img className="rating" src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685490513/5-Star-Rating-Review-Transparent-PNG-removebg-preview_stutay.png" alt="" />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
