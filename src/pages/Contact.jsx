import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, FormGroup } from "reactstrap";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import useSEO from "../hook/useSEO";
import Loading from 'react-fullscreen-loading'

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/servitecamagallaneschile/",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/serviteca.magallanes/?hl=es",
    icon: "ri-instagram-line",
  },
  {
    url: "https://wa.me/56961412094",
    icon: "ri-whatsapp-line",
  }
];

// credenciales emailjs
const SERVICE_ID = "service_kkho6ha";
const TEMPLATE_ID = "template_cv5lkgd";
const PUBLIC_KEY = "bh14t_HyGm1gzO9QD";

const Contact = () => {

  const form = useRef();
  // loading de envio de email
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correcamente'
          })
          // limpia los campos del formulario
          form.current.reset();
          setLoading(false)
      }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops, a habido un error, intentelo nuevamente',
            text: error.text,
          })
          console.log(error.text);
          setLoading(false)
      });
  };

  // usamos el hook para el seo
  let title = 'Contáctanos - Taller Automotriz Santiago'
  let descripcion_page = 'Problemas con vehiculo, en que taller llevar mi auto en santiago, el mejor taller de la cisterna, el mejor taller de la granja, número de algun taller abierto'
  useSEO(title, descripcion_page);

  return (
    <section>
      {
        loading ? <Loading loading background='#0000008c' loaderColor='#fff' /> : null
      }
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h6 className="fw-bold mb-4">Póngase en contacto con nosotros</h6>
            <form ref={form} onSubmit={sendEmail}>
              <FormGroup className="contact__form">
              <input type='text' className="form-control" required name="name" placeholder='Ingrese su nombre' />
              </FormGroup>
              <FormGroup className="contact__form">
                <input type='email' className="form-control" required name="email" placeholder='Ingrese su email' />
              </FormGroup>
              <FormGroup className="contact__form">
              <input type='text' className="form-control" required name="phone" placeholder='Ingrese su teléfono' />
              </FormGroup>
              <FormGroup className="contact__form">
                <textarea
                  rows="5"
                  required
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
                <h6 className="fs-6 mb-0">Teléfono:</h6>
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
  );
};

export default Contact;
