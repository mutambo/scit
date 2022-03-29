import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CImage from 'react-bootstrap/Image';
import {MDBContainer} from 'mdbreact';
import icon from './images/Tuk.jpg';

import {
  Row,
  Col,
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
            <Form>
              <Form.Group
                as={Row}
                className="mb-2"
                controlId="formPlaintextUsername"
              >
                <Form.Label column sm="20">
                  User Name
                </Form.Label>
                <Col sm="20">
                <Form.Control type="Username" placeholder="Username" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="20">
                  Password
                </Form.Label>
                <Col sm="20">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Form>
           
          </Form>
          <MDBContainer />
          <Button variant="primary" type="submit" className="mb-5">
              Login
            </Button>
        </header>
      </Container>
    </div>
  );
}

export default App;
