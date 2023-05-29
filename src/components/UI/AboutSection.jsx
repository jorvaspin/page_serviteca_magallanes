import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Sobre Nosotros</h4>
              <h2 className="section__title">Bienvenidos a Serviteca Magallanes</h2>
              <p className="section__description">
              Taller Automotriz donde el cliente es prioridad. Nos esmeramos por desplegar nuestros recursos humanos, técnicos y logísticos por lograr la mas absoluta satisfacción en el servicio.
              </p>
              <p className="section__description">
              Calidad y transparencia es nuestro eslogan. Día a día nos esforzamos por generar la llegada de nuevos clientes, pero por sobretodo nos colma de satisfacción el retorno de los mismos.
              </p>
              <Container>
                <Row>
                  <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Atención de primera categoría, en nuestras dependencias
                    </p>
                  </div>
                  </Col>
                  <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Garantía en mano de obra y repuestos
                    </p>
                  </div>
                  </Col>
                  <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Atención personalizada
                    </p>
                  </div>
                  </Col>
                  <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Más de 25 años de confianza y experiencia en el mercado avalan nuestra expertise.
                    </p>
                  </div>
                  </Col>
                </Row>
              </Container>
              
              

              
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
