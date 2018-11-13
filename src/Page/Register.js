import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../Logincss/Login_v1/css/main.css';
import '../Logincss/Login_v1/css/util.css';

import DB_CONFIG from '../config';
import firebase from 'firebase';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {BrowserRouter, Route ,NavLink} from 'react-router-dom'

/// Initialize Firebase

class Register extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
     test: 0
    };
  }

  componentDidMount(){
    
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Input  type="email" name="email" placeholder="Email" value={this.state.test} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

     
      
    );
  }
}

export default Register;
