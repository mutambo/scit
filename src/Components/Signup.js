import React, {Component} from 'react';
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
import icon from '../images/Tuk.jpg';
import '../main.css';
import '../index.css';
export default class Signup extends Component {
  render () {
    return (
      <div className="head">
        <Container fluid>
          <header className="App-head">
            <div className="header">
              <div className="header-text-image mb-5">
                <div className="tuk">
                  <img src={icon} alt="import" className="img" />

                </div>

                <Row>

                  <div
                    className="text-nowrap, fs-2"
                    style={{width: '35rem', color: 'goldenrod'}}
                  >
                    TUK-CSI ALLOCATION SCHEME 2021/2022
                  </div>
                </Row>
              </div>
              <div className="navbar">
                <Navbar variant="dark" className="nav" expand="lg">
                  <Container>

                    <Nav className="me-auto">
                      <Nav.Link href="#home">All Allocations</Nav.Link>
                      <Nav.Link href="#features">Lecturer Allocation</Nav.Link>
                      <Nav.Link href="#pricing">School Allocation</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              </div>
              <div className="form-input">
                <Form>
                  <Row>
                    <Col className="mb-3">
                      <Form.Control placeholder="Lecturer Name" />
                    </Col>
                    <Col className="mb-3">
                      <Form.Control placeholder="Unit Name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <Form.Control placeholder="School" />
                    </Col>
                    <Col className="mb-3">
                      <Form.Control placeholder="Programme" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <Form.Control placeholder="Module" />
                    </Col>
                    <Col className="mb-3">
                      <Form.Control placeholder="Approx. No of Students" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <Form.Control placeholder="Code" />
                    </Col>
                    <Col className="mb-3">
                      <Form.Control placeholder="Department" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <Form.Control placeholder="Class Code" />
                    </Col>
                    <Col className="mb-3">
                      <Form.Control placeholder="Hours" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <Form.Control placeholder="Level" className="small" />
                    </Col>
                    {/* <Col className="mb-3">
                      <Form.Control placeholder="Hours" />
                    </Col> */}
                  </Row>
                </Form>
              </div>
              <div className="Submit">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-5"
                  onClick={this.onSubmitClick}
                >
                 Submit
                </Button>
              </div>
            </div>
          </header>
        </Container>
      </div>
    );
  }
}
