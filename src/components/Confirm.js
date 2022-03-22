import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Confirm(props) {
  return (
    <>
      <Container>
        <Row>
          <h6>We look forward to seeing you at your viewing</h6>
          <Col sm={6}>
            <p>Viewing date and time</p>
            <p>
              `${props.time} + ${props.date}`
            </p>
          </Col>
          <Col sm={6}>
            <p>Name</p>
            <p>`${props.name} + name`</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>Size of viewing group</p>
            <p>`${props.sizeGroup} + sizeGroup`</p>
          </Col>
          <Col sm={6}>
            <p>Email</p>
            <p>`${props.email} + email;`</p>
          </Col>
          <p className="add-to-calendar text-danger text-end">Add to calendar</p>
          <Card>
          <Card.Img src="http://localhost:3000/images/Confirmation/image 1.png" />
          </Card>
          <Col sm={6}>
          <Button className="mt-3" variant="outline-danger">Change booking details</Button>
          </Col>
          <Col sm={6}>
          <Button classname="mt-3" variant="danger">View more properties</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
