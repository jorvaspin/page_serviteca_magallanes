import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";

const LogosCar = () => {
  return (
    <div className="logos-car">
      <Container>
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="logos-car__wrapper">
              <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685132992/logos_car_1_dungue.jpg" className="w-100" alt="" />
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="logos-car__wrapper">
              <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685132992/logos_car2_iqbipd.jpg" className="w-100" alt="" />
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="logos-car__wrapper">
              <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685132992/logos_car3_h8tlqs.jpg" className="w-100" alt="" />
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="logos-car__wrapper">
              <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685132992/logos_car4_emk73w.jpg" className="w-100" alt="" />
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="logos-car__wrapper">
              <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685132992/logos_car5_c49up1.jpg" className="w-100" alt="" />
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="logos-car__wrapper">
              <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1685132992/logos_car6_hjscz1.jpg" className="w-100" alt="" />
            </div>
          </Col>
          <Col lg="12" md="12" sm="12">
          <div className="title_bottom">
              <h4>El servicio que tu vehículo necesita</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogosCar;
