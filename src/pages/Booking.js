import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import BookingTime from '../components/BookingTime.js';

import "./Booking.css";


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

// import background from '../../public/images/Book-Viewing/Cool Kids Staying Home-1.png';
//   style={{
//       backgroundImage: "url(http://localhost:3000/images/Book-Viewing/box/Cool Kids Staying Home-1.png)",
//     //   backgroundSize: "cover",
//     //   backgroundRepeat:"no-repeat"
//       backgroundRepeat:"repeat"
//       }}

const Booking = () => {
  const [bookValue, setBookValue] = useState("");

  return (
    <>
      <Container
        className="container-main"
        style={{
          backgroundImage:
            "url(http://localhost:3000/images/Book-Viewing/box/Cool Kids Staying Home-1.png)",
        }}
      >
        <Container className="container-2nd mx-5">
          {/* <Container> */}
          <Row>
            <Col sm={5}>
              <Card className="mt-2">
                <Card.Title className="card-title mt-2">
                  Book a viewing of
                </Card.Title>
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
                    className="mb-4 pe-4"
                  />
                </Row>
              </Card>
            </Col>
            <Col sm={7}>
              <Container>
                <p>Viewing date and time</p>
                <Row>
                  <Col sm={6}>
                    <Form.Control type="date" name="" />
                  </Col>
                  <Col sm={6}>
                    <Row>
                      <Col sm={4} className="px-1">

                       <BookingTime />
                        {/* <DropdownButton
                          id="dropdown-basic-button"
                          variant="light"
                          title="Morning"
                        >
                          <Dropdown.Item href="#/action-1">10:00</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">11:00</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                      <Col sm={4} className="mr-1">
                        <DropdownButton
                          id="dropdown-basic-button"
                          variant="light"
                          title="Afternoon"
                        >
                          <Dropdown.Item href="#/action-1">1:00</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">3:00</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                      <Col sm={4} className="px-0">
                        <DropdownButton
                          id="dropdown-basic-button"
                          variant="light"
                          title="Evening"
                        >
                          <Dropdown.Item href="#/action-1">5:00</Dropdown.Item>
                        </DropdownButton> */}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <p className="mt-3">Your information</p>
                <Form>
                  <Row>
                    <Col className="my-0 mb-3">
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col className="my-0 mb-3">
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-2">
                      <Form.Control placeholder="Phone number" />
                    </Col>
                    <Col className="my-2">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-2">
                      <p>Group information</p>
                      <DropdownButton
                        className="pl-0"
                        id="dropdown-basic-button"
                        variant="light"
                        title="Size of viewing group"
                      >
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                    <Col className="my-2">
                      <p>Agree to Covid-19 regulation</p>
                      <form>
                        <label className="checkbox-margin my-2">Read regulation</label>
                        <input type="checkbox" className="checkbox-color"/>
                      </form>
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
          <Row>
            <Col className="text-center">
              <Link to="/booking">
                <Button variant="danger" type="submit">
                  Book a viewing
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Booking;
