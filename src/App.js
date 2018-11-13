import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Logincss/Login_v1/css/main.css';
import './Logincss/Login_v1/css/util.css';
import imglogin from'./Logincss/Login_v1/images/img-01.png' ;
import Register from'./Page/Register';
import Login from './Page/login';

import {BrowserRouter, Route ,NavLink} from 'react-router-dom'
import { Router, Switch } from 'react-router'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const routes = [
  {
    path: "/register",
    exact: true,
    main: () => <Register />
  },
];

const register = () => (
  <BrowserRouter>
    <Register />
  </BrowserRouter>
)

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>


class App extends Component {



  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }


  render() {
    return (
      
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />
        
      </Switch>
    </BrowserRouter>
      
    );
  }
}

export default App;
