import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CImage from 'react-bootstrap/Image';
import {MDBContainer} from 'mdbreact';
import icon from './images/Tuk.jpg';

import {
  Row,
  Column,
  Button,
  Alert,
  ProgressBar,
  Table,
  Container,
  Nav,
  Form,
} from 'react-bootstrap';
function App () {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
        <div className="tuk">
          <img src={icon} alt="import" className="img"/>
          
          </div>
         
          <Row>
          
            <div
              className="text-nowrap, fs-2"
              style={{width: '35rem', color: 'goldenrod'}}
            >
              TUK-CSI ALLOCATION SCHEME 2021/2022
            </div>
          </Row>

          <Row>
            <div
              className="text-wrap , fs-2"
              style={{width: '35rem', color: 'blue'}}
            >
              School of Computer Science
              and Informatics
            </div>
          </Row>

          <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-5">
              Login
            </Button>
          </Form>
          <MDBContainer />

        </header>
      </Container>
    </div>
  );
}

export default App;
