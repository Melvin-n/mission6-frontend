import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import "./Booking.css";
// import axios from "axios";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Booking = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [sizeViewGroup, setSizeViewGroup] = useState("");
  const [viewDate, setViewDate] = useState("");
  const [viewTime, setViewTime] = useState("");

  const navigate = useNavigate();

  const reset = () => {
    setFirstName("");
    setLastName("");
    setPhoneNum("");
    setEmail("");
    setSizeViewGroup("");
    setViewDate("");
    setViewTime("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, phoneNum, email, sizeViewGroup, viewDate, viewTime );
    // navigate('/confirm');
    createUser();
  };

  const createUser = async() => {
    const baseURL = "http://localhost:5000/api/users";

    const newUser = {
      firstName,
      lastName,
      phoneNum,
      email,
      sizeViewGroup,
      viewDate,
      viewTime
    };

    fetch('http://mym6-alb-2138763550.us-east-2.elb.amazonaws.com/api/booking', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        query: newUser
      })
    })
    .then((res) => res.json())
    .then((data) => {
      props.setBookingConfirm(data)  
      navigate('/confirm')
    })
  }



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
                <Form>
                  <Form.Text className="mb-4 pb-5 view-date-time">Viewing date and time</Form.Text>
                 <Row>
                  <Col sm={6}>
                    <Form.Control 
                      type="date" 
                      onChange={(e) => setViewDate(e.target.value)}
                      value={viewDate}
                    />
                  </Col>
                  <Col sm={6}>
                    <Col className="my-0 mb-3">
                      <Form.Control 
                        type="time"
                        onChange={(e) => setViewTime(e.target.value)}
                        value={viewTime} />
                    </Col>
                  </Col>
                 </Row>
                  <Form.Text className="mb-4 pb-5 yourinfo">Your information</Form.Text>
                   <Row>
                    <Col className="my-0 mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="First name" 
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName} /> 
                    </Col>
                    <Col className="my-0 mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-2">
                      <Form.Control 
                        type="text" 
                        placeholder="Phone number"
                        onChange={(e) => setPhoneNum(e.target.value)}
                        value={phoneNum} />
                    </Col>
                    <Col className="my-2">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control 
                          type="email" 
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)} 
                          value={email} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-2">
                       <Form.Text className="mb-4 pb-5 group-info ">Group information</Form.Text>
                        <Form.Select 
                          aria-label="Default select example"
                          onChange={(e) => setSizeViewGroup(e.target.value)}
                          value={sizeViewGroup}>
                          <option>Size of view group</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col className="my-2">
                       <Form.Text className="mb-4 pb-5 agree-covid" >Agree to Covid-19 regulation</Form.Text>
                       <Form.Check 
                         type="checkbox"
                         variant="danger"
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                       <Form.Text className="mb-4 pb-5 movein-date" >Preferred move in date</Form.Text>
                       <Form.Control type="date" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                    {/* <Link to="/confirm"> */}
                     <Button className="mt-3" variant="danger" onClick={handleSubmit}>
                        Book a viewing
                     </Button>
                    {/* </Link> */}
                   </Col>
                  </Row>
                </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Booking;
