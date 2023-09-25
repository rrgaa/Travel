import React from "react";

import { Col, Row, Card, Button, Container } from "react-bootstrap";

function Product() {
  return (
    <div className="Product" id="Product">
      <Container>
        <h1 className="Headline"> Daftar Paket Travel</h1>
        <Row>
          <Col className="Col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="Col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
