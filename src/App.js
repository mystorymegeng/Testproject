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
import firebase from 'firebase';
import DB_CONFIG from './config';


var config = {
  apiKey: "AIzaSyDSUJXonVzBs0zj1izOrGsBbxmBe7FC0W4",
  authDomain: "project4-2-42312.firebaseapp.com",
  databaseURL: "https://project4-2-42312.firebaseio.com",
  projectId: "project4-2-42312",
  storageBucket: "project4-2-42312.appspot.com",
  messagingSenderId: "1000029040402"
};
// firebase.initializeApp(config);

class App extends Component {

  constructor(props) {
    super(props);

    // Initialize Firebase
    this.state = {
      email: "",
      password: ""
    };
  }


  render() {
    return (
      
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />
        
      </Switch>
    </BrowserRouter>
      
    );
  }
}

export default App;
