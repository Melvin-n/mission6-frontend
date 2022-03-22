import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import "./Booking.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Booking = () => {

  return (
    <>
      <Header />
      <Container className="container-main mt-5">
        <Container className="container-2nd mx-5">
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
                        <label className="checkbox-margin my-2">
                          Read regulation
                        </label>
                        <input type="checkbox" className="checkbox-color" />
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
          <Link to="/confirm">
          <Button className="mt-3" variant="danger">
           Book a viewing
          </Button>
        </Link>
          </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Booking;
