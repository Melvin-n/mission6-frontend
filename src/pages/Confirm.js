// import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
// import axios from "axios";
import "./Confirm.css";

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Confirm = (prop) => {

  return (
    <>
      <Header />
      <Container className="container-main mt-5">
        <Container className="container-2nd mx-5">
          <Row>
            <Col sm={5}>
              <Card className="mt-2">
                <Card.Title className="card-title mt-2">
                  Thanks Peter, see you there!
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
              

            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Confirm;
