import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../Logincss/Login_v1/css/main.css';
import '../Logincss/Login_v1/css/util.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {BrowserRouter, Route ,NavLink} from 'react-router-dom'


class Register extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}
  
  
  render() {
    return (
      
      <div>
        <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt>
          
        </div>
        <form class="login100-form validate-form" onSubmit={this.handleSubmit}>
          <span class="login100-form-title">
            Member Login
          </span>
          <div class="wrap-input100 validate-input" >
            <input class="input100" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div class="wrap-input100 validate-input" >
            <input class="input100" type="password"  placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="container-login100-form-btn">
            <button className="login100-form-btn" onClick={this.login.bind(this)}>
              Login
            </button>
            
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

export default Register;
