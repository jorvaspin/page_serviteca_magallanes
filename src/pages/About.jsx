import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="Taller Automotriz | Santiago">
      <CommonSection title="Serviteca Magallanes" />
      <AboutSection aboutclassName="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Más que un taller mecánico
                </h2>

                <p className="section__description">
                  Damos la cobertura e integridad necesaria para realizar todos los requerimientos, que solo serviteca magallanes sabe ofrecer
                </p>

                <p className="section__description">
                Nuestros profesionales 100% comprometidos con la calidad de servicio, alineados con los estándares recomendados por el fabricante y garantizando puntualidad en la entrega.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">¿Necesitas ayuda inmediata?</h6>
                    <h4>+56 9 6141 2094</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Serviteca Magallanes</h6>
              <h2 className="section__title">Equipo de trabajo</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
