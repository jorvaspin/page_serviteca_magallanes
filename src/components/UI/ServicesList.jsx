import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <div className="background-services"
        style={{
          background: `url(${item.background}) no-repeat center center/cover`,
        }}
      >
        <div className="overlay overlay_1"></div>

      <h6>{item.title}</h6>
      <p className="service__description">{item.desc}</p>
      </div>
    </div>
  </Col>
);

export default ServicesList;
