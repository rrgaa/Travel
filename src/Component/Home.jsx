import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Mekah from "../Images/Mekah.webp";
function Home() {
  return (
    <div className="Home" id="Home">
      <Container>
        <Row className="Home-Row">
          <Col className="Home-Text">
            <h1 className="Brand-Text">INDANA TOUR AND TRAVEL</h1>
            <p className="Brand-Headline">Spesialis UMROH dan HAJI</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <Button variant="outline-light">
              Info Lebih Lanjut !
            </Button>
          </Col>
          <Col className="Home-Images">
            <img src={Mekah} alt="Foto Kaabah" className="Images" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
