import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
// import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import LogosCar from "../components/UI/LogosCar";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
// import useSEO from "../hook/useSEO";
import { Helmet } from 'react-helmet'; 

const Home = () => {
  // usamos el hook useSEO
  let title = 'Serviteca Magallanes - Taller Automotriz Santiago'
  let descripcion_page = 'Serviteca Magallanes, taller automotriz. Entrengando un serivio de calidad para su vehiculo. Si necesita servicios de cambio de aceite, alineación, balaneceo, o mecánica en general, no dude en contactarnos.'
  // useSEO(title, descripcion_page);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={descripcion_page} />
      </Helmet>

      {/* seccion multimarca */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>¡Somos multimarca!</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <LogosCar />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*seccion quienes somos*/}
      <div className="about__section_home">
       <AboutSection />
      </div>
      {/*seccion servicios */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Conozca nuestros</h6>
              <h2 className="section__title">Servicios Populares</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* seccion tu auto necesita ayuda */}
      <BecomeDriverSection />

      {/* seccion testimonio de clientes */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Nuestros clientes comentan</h6>
              <h2 className="section__title">Testimonios</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
