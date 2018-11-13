import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Logincss/Login_v1/css/main.css';
import './Logincss/Login_v1/css/util.css';
import imglogin from'./Logincss/Login_v1/images/img-01.png' ;


import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  render() {
    return (
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <Label for="exampleEmail">Email</Label>
      //     <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={imglogin} alt="logo" />
            </div>
            <form class="login100-form validate-form">
              <span class="login100-form-title">
                 Login
              </span>
              <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input class="input100" type="text" name="email" placeholder="Email"/>
                <span class="focus-input100"></span>
						    <span class="symbol-input100">
							    <i class="fa fa-envelope" aria-hidden="true"></i>
						    </span>
              </div>
              <div class="wrap-input100 validate-input" data-validate = "Password is required">
                <input class="input100" type="password" name="pass" placeholder="Password"/>
						    <span class="focus-input100"></span>
						    <span class="symbol-input100">
							    <i class="fa fa-lock" aria-hidden="true"></i>
						    </span>
              </div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
							    Login
						    </button>
              </div>
              <div class="text-center p-t-70">
                <a class="txt2" href="#">
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

export default App;
