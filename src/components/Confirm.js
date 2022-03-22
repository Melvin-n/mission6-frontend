import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

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
          <Card>
              
          </Card>
        </Row>
      </Container>
    </>
  );
}
