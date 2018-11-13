import React, { Component } from 'react';
import App from '../App';
import logo from '../logo.svg';
import '../App.css';
import '../Logincss/Login_v1/css/main.css';
import '../Logincss/Login_v1/css/util.css';
import firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, Col,Row,Card,CardBody,CardTitle } from 'reactstrap';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Login from'./login';
export const setpath = createBrowserHistory();

const login = () => (
  <BrowserRouter>
    <Login />
  </BrowserRouter>
)

/// Initialize Firebase
const auth = firebase.auth;
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
        password: '',
        error: '',
        loading: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}
handleEmailChange(e) {
  this.setState({ email: e.target.value });
}

handlePasswordChange(e) {
  this.setState({ password: e.target.value });
}
onRegisterButtonPress = () => {
  const { email, password } = this.state;

  this.setState({ loading: true });
  auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
          //this.setState({ loading: false });
          alert("Register Successful , " + email + " " + password);
          window.location.reload();
          setpath.push('/');
          return <Route path="/" component={login} />
      })
      .catch((msgError) => {
          this.setState({ loading: false });
          alert(msgError.message);
      });
}

renderButton() {

      return (<Button  onClick={this.onRegisterButtonPress.bind(this)}>Register</Button>);
  
}

  render() {

    return (

      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} >
            <Card>
              <CardBody>
                <CardTitle>Please enter your username and password</CardTitle>
                <Form>
                  <FormGroup row>
                    <Label for="exampleEmail2" sm={2}>username</Label>
                    <Col sm={9}>
                      <Input type="text" name="email" id="email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)}  placeholder="email" />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail2" sm={2}>password</Label>
                    <Col sm={9}>
                      <Input type="password" name="password" id="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} placeholder="password" />
                    </Col>
                  </FormGroup>
                </Form>
                {this.renderButton()}
          </CardBody>
        </Card>
        </Col>
        </Row>
      </div >






    );
  }
}

export default Register;
