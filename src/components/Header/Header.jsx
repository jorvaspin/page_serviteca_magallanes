import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/inicio",
    display: "Inicio",
  },
  {
    path: "/quienes-somos",
    display: "Quiénes somos",
  },
  {
    path: "/contacto",
    display: "Contacto",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* == header top == */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>¿Necesitas ayuda?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +56 9 6141 2094
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ===== header middle = */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="2" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1684513017/logo_magallanes_bvqpva.png" width={55} alt="" />
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="4" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Avenida Satanda Rosa 6794</h4>
                  <h6>La Granja, Chile</h6>
                </div>
              </div>
            </Col>

            <Col lg="4" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Lunes a Sábado</h4>
                  <h6>9AM - 6PM (Sábado hasta las 14hrs)</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contacto">
                  <i className="ri-phone-line"></i> Llámanos
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  main navigation = */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
              <div className="logo">
               <img src="https://res.cloudinary.com/dr3zgzxx0/image/upload/v1684513017/logo_magallanes_bvqpva.png" width={50} alt="" />
              </div>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                <h4>Navegación</h4>
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
