import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../Logincss/Login_v1/css/main.css';
import '../Logincss/Login_v1/css/util.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {BrowserRouter, Route ,NavLink} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class Register extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
