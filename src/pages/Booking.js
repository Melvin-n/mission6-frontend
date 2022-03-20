import React, { useState } from "react";

import "./Booking.css";
// import Button from 'react-bootstrap/Button';

// or less ideally
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Card,
  Image,
} from "react-bootstrap";

const Booking = () => {
  const [bookValue, setBookValue] = useState("");

  return (
    <>
      <Container>
        <Row>
          <Col sm={5}>
            <Card className="mt-2">
             <Card.Title className="card-title mt-2">Book a viewing of</Card.Title>
              <Row>
                <Image
                  src="http://localhost:3000/images/Book-Viewing/Property card.png"
                  fluid
                  rounded
                  className="my-0 px-1"
                />
              </Row>
              <Row>
                <Image
                  src="http://localhost:3000/images/Book-Viewing/box/small.png"
                  fluid
                  rounded
                  className="my-0 px-2"
                />
              </Row>
            </Card>
          </Col>
          <Col sm={7}>
            <Container>
            <p>Viewing date and time</p>
              {/* <Container > */}
                {/* <p>Viewing date and time</p> */}
                <Row>
                  <Col sm={6}>
                    <Form.Control type="date" name="" />
                  </Col>
                  <Col sm={6}>
                    <Row>
                      <Col sm={4}>
                        <DropdownButton
                          id="dropdown-basic-button"
                          variant="light"
                          title="Morning"
                        >
                          <Dropdown.Item href="#/action-1">10:00</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">11:00</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                      <Col sm={4}>
                        <DropdownButton
                          id="dropdown-basic-button"
                          variant="light"
                          title="Afternoon"
                        >
                          <Dropdown.Item href="#/action-1">1:00</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">3:00</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                      <Col sm={4}>
                        <DropdownButton
                          id="dropdown-basic-button"
                          variant="light"
                          title="Evening"
                        >
                          <Dropdown.Item href="#/action-1">5:00</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              {/* </Container> */}
              <p>Your information</p>
              <Form>
                <Row className="my-2">
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control placeholder="Phone number" />
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      {/* <Form.Label>Email</Form.Label> */}
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Group information</p>
                    <DropdownButton
                      id="dropdown-basic-button"
                      variant="light"
                      title="Size of viewing group"
                    >
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col>
                    <p>Agree to Covid-19 regulation</p>
                    <InputGroup className="mb-3">
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <p>Preferred move in date</p>
                    <Form.Control type="date" name="" />
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
