import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import LogosCar from "../components/UI/LogosCar";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

const Home = () => {
  return (
    <Helmet title="Home">
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
      <AboutSection />
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
              <h6 className="section__subtitle">Nuestros clientes dicen</h6>
              <h2 className="section__title">Testimonios</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
