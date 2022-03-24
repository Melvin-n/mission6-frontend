// import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import axios from "axios";
import "./Confirm.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";



const Confirm = (props) => {

  const navigate = useNavigate();

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

  return (
    <>
      <Header />
      <Container className="container-main mt-5">
       <Row>
        <Container className="container-2nd mx-5">
          <Row>
            <Col sm={5}>
              <Card className="mt-2">
                <Card.Title className="card-title mt-2">
                  Thanks {props.bookingConfirm.name}, see you there!
                </Card.Title>
                <Row>
                  <Image
                    src="./images/Book-Viewing/Property card.png"
                    fluid
                    rounded
                    className="my-0 px-1"
                  />
                </Row>
                <Row>
                  <Image
                    src="./images/Book-Viewing/box/small.png"
                    fluid
                    rounded
                    className="mb-4 pe-4"
                  />
                </Row>
              </Card>
            </Col>
            <Col sm={7}>
              <Card className="mb-2 mt-2">
                  <Card.Title>We look forward to seeing you at your viewing</Card.Title>
              </Card>
               <Row className="my-3">
                <Col sm={6}>
                  <ListGroup className="mt-1">
                    <ListGroup.Item>Viewing date and time</ListGroup.Item>
                    <ListGroup.Item>{props.bookingConfirm.viewTime}, {props.bookingConfirm.viewDate}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={6}>
                  <ListGroup className="mt-1">
                    <ListGroup.Item>Name</ListGroup.Item>
                    <ListGroup.Item>{props.bookingConfirm.name}</ListGroup.Item>
                  </ListGroup>
                </Col>
               </Row>
               <Row >
                <Col sm={6}>
                  <ListGroup className="mt-1">
                    <ListGroup.Item>Size of viewing group</ListGroup.Item>
                    <ListGroup.Item>{props.bookingConfirm.sizeViewGroup}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={6}>
                  <ListGroup className="mt-1">
                    <ListGroup.Item>Email</ListGroup.Item>
                    <ListGroup.Item>{props.bookingConfirm.email}</ListGroup.Item>
                  </ListGroup>
                </Col>
               </Row>
               <Row >
                {/* <Card>
                  <Card.Text className="mt-4">Add to calendar</Card.Text>
                </Card> */}
               <Image
                  src="./images/Confirmation/image 1.png"
                  fluid
                  rounded
                  className="mt-2"
                />
               </Row>
               <Row>
                 <Col ms={6}>
                  <Button 
                    className="ms-5 mt-0" 
                    variant="outline-danger"  
                    size="lg">
                     Change booking details
                  </Button>
                 </Col>
                 <Col ms={6}>
                  <Button 
                    className="ms-5 mt-0" 
                    variant="danger" 
                    size="lg"
                    onClick={() => navigate('/results')}>
                     View more properties
                     
                  </Button>
                 </Col>
               </Row>
            </Col>
          </Row>
         </Container>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Confirm;
