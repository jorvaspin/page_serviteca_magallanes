import React from "react";

import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            {/* <div className="logo footer__logo">
              <h1>
                <Link to="/inicio" className=" d-flex align-items-center gap-2">
                   <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1684513017/logo_magallanes_bvqpva.png" width={65} alt="" />
                </Link>
              </h1>
            </div> */}
            <p className="footer__logo-content">
              Calidad y transparencia es nuestro eslogan. Día a día nos esforzamos por generar la llegada de nuevos clientes, pero por sobretodo 
              nos colma de satisfacción el retorno de los mismos.
            </p>
          </Col>

          {/* <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col> */}

          <Col lg="4" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Noticias y Ofertas</h5>
              <p className="section__description">Suscribete para saber más</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="4" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Taller Oficial</h5>
              <p className="office__info">Avenida Santa Rosa 6794</p>
              <p className="office__info">La Granja, Chile</p>
              <p className="office__info">Phone: +56 9 61414 2094</p>

              <p className="office__info">Email: contacto@servitecamagallanes.cl</p>

              <p className="office__info">Horario Lunes a Viernes: 9am - 6pm</p>
              <p className="office__info">Horario Sábados: 9am - 2pm</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Desarrollada Por
                <a href="https://wa.me/56961545782" target="_blank" rel="noopener noreferrer"> Jorge Vásquez Pinto</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
