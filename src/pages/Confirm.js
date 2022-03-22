import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import "./Confirm.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Confirm(props) {
  return (
    <>
      <Header />
      <Container className="mt-5">
       <Container className="mx-6">
        <Row className="">
          <Col sm={5}>
            <Card className="mt-0 ms-2">
              <Card.Title className="card-title mt-0">
               Thanks Peter, see you there!
              </Card.Title>
              <Row>
               <Col>
                <Image
                  src="http://localhost:3000/images/Book-Viewing/Property card.png"
                  fluid
                  rounded
                  className="my-0 px-1"
                />
               </Col>
              </Row>
              <Row>
               <Col>
                <Image
                  src="http://localhost:3000/images/Book-Viewing/box/small.png"
                  fluid
                  rounded
                  className="mb-4 pe-4"
                />
               </Col>
              </Row>
            </Card>
          </Col>
           <Col sm={7}>
             <Row classname="ms-3">
              <Col classname="">
              <p>We look forward to seeing you at your viewing</p>
              </Col>
             </Row> 
               <Row>
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
              </Row>
                <Row>
                 <Col>
                  <p className="add-to-calendar text-danger text-end my-0 py-0">
                   Add to calendar
                  </p>
                 </Col> 
                </Row>
                  <Row>
                    <Col>
                      <Image
                        src="http://localhost:3000/images/Confirmation/image 1.png"
                        fluid
                        rounded
                        className="my-0"
                      />
                    </Col>
                  </Row>
                  <Row>
                   <Col sm={6} className="">
                    <Button className="mr-0" variant="outline-danger">
                      Change booking details
                    </Button>
                   </Col>
                   <Col sm={6} className="">
                    <Button  variant="danger">
                      Change booking details
                    </Button>
                   </Col>
                  </Row>
          </Col>
        </Row>
      </Container>
    </Container> 
    <Footer />
    </>
  );
}
