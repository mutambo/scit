import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBContainer} from 'mdbreact';
import icon from './images/Tuk.jpg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './Components/Signup';
// import React, { Component } from "react";
import {Row, Col, Button, Container, Form} from 'react-bootstrap';
import React, {Component} from 'react';

export class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onChange = e => {
    this.setState ({[e.target.name]: e.target.value});
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log ('Sign up ' + userData.username + ' ' + userData.password);
  };
  render () {
    return (
      <div>
        <div className="App">

          <Container fluid>
            <header className="App-header">
              <div className="tuk">
                <img src={icon} alt="import" className="img" />

              </div>

              <div
                className="text-nowrap, fs-2"
                style={{width: '35rem', color: 'goldenrod'}}
              >
                TUK-CSI ALLOCATION SCHEME 2021/2022
                <div
                  className="text-wrap , fs-2"
                  style={{width: '35rem', color: 'blue', marginLeft: '-400px'}}
                >
                  School of Computer Science
                  and Informatics
                </div>
              </div>
              <div className="form , mt-5">

                <Form className="mt-5">
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

              </div>

              <div className="login">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-5"
                  onClick={this.onLoginClick}
                >
                  Login
                </Button>
              </div>
            </header>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

// function App () {

// export default App;

// import React, { Component } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signup from "./Components/Signup";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/signup" component={Signup} />

//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;
