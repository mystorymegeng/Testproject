import React, { Component } from 'react';
import '../App.css';
import '../Logincss/Login_v1/css/main.css';
import '../Logincss/Login_v1/css/util.css';
import imglogin from '../Logincss/Login_v1/images/img-01.png';
import Register from '../Page/Register';

import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { Router, Switch } from 'react-router'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import firebase from 'firebase';
const register = () => (
  <BrowserRouter>
    <Register />
  </BrowserRouter>
)

const auth = firebase.auth;
const db = firebase.database;

class Login extends Component {



  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      uid: "",
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    alert(this.state.email + ' : ' + this.state.password);
    auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(value => {
        console.log("test : " + value.user.uid);
      }).catch(error => {
        this.openDialog1();
      });
    alert(this.state.uid);
  }

  register() {
    alert('test');
    return <Route path="/register" component={register} />
  }



  render() {
    return (

      <div className="limiter">

        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={imglogin} alt="logo" />
            </div>
            <form class="login100-form validate-form" onSubmit={this.handleSubmit}>
              <span class="login100-form-title">
                Member Login
              </span>
              <div class="wrap-input100 validate-input" >
                <input class="input100" type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => { this.handleEmailChange(e) }} />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div class="wrap-input100 validate-input" >
                <input class="input100" type="password" placeholder="Password" value={this.state.password} onChange={(e) => { this.handlePasswordChange(e) }} />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.login.bind(this)}>
<<<<<<< HEAD
							    Login
                </button>
                
=======
                  Login
						    </button>
                <Button className="login100-form-btn" onClick={this.login.bind(this)}>Login</Button>

>>>>>>> bfc4bf5d894ed108cd730642cd55d78238475410
              </div>
              <div class="text-center p-t-70">
                <a class="txt2" href="/register" onClick={this.register.bind(this)}>
                  Create your Account
							    <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
