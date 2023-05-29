import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

// credenciales emailjs
const SERVICE_ID = ".env REACT_APP_SERVICE_ID";
const TEMPLATE_ID = ".env REACT_APP_TEMPLATE_ID";
const PUBLIC_KEY = ".env REACT_APP_PUBLIC_KEY";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correcamente'
          })
          // limpia los campos del formulario
          form.current.reset();
      }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops, a habido un error, intentelo nuevamente',
            text: error.text,
          })
          console.log(error.text);
      });
  };

  return (
    <Helmet title="Contacto">
      <CommonSection title="Contacto" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Póngase en contacto con nosotros</h6>
              <form ref={form} onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                <input type='text' className="form-control" name="name" placeholder='Ingrese su nombre' />
                </FormGroup>
                <FormGroup className="contact__form">
                  <input type='email' className="form-control" name="email" placeholder='Ingrese su email' />
                </FormGroup>
                <FormGroup className="contact__form">
                <input type='text' className="form-control" name="phone" placeholder='Ingrese su teléfono' />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Mensaje"
                    className="textarea"
                    name='message'
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Enviar mensaje
                </button>
              </form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Información de contacto</h6>
                <p className="section__description mb-0">
                  Avenida Santa Rosa 6794, Santiago, Chile
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Teéfono:</h6>
                  <p className="section__description mb-0">+56 9 6141 2094</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">contacto@servitecamagallanes.cl</p>
                </div>

                <h6 className="fw-bold mt-4">Síguenos en nuestras redes sociales</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
