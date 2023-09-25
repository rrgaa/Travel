import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Images/Logo-2.webp";

function Footer() {
  return (
    <div className="Footer" id="Footer">
      <Container>
        <Row>
          <Col>
            <img className="Logo-Images" src={Logo} />
            <Row className="Footer-Contact">
              <p>TERHUBUNG DENGAN KAMI</p>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">Facebook</a>
              <a href="">LinkIn</a>
            </Row>
            <p className="Email">indanatour@gmail.com</p>
          </Col>
          <Col>
            Pernyataan Pamungkas Anda disini. <br />
            Buatlah Kesan Mendalam
            <Row className="Location">
              <p>Lokasi Kami</p>
              <p>
                Jalan Raya Bantarsari Desa Bantarsari <br />
                Kecamatan Rancabungur Kabupaten bogor
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
