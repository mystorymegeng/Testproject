import React, { Component } from 'react';
import '../App.css';
import '../Logincss/Login_v1/css/main.css';
import '../Logincss/Login_v1/css/util.css';
import imglogin from'../Logincss/Login_v1/images/img-01.png' ;
import Register from'../Page/Register';

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


class Login extends Component {



  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  login(){
    alert(this.state.email+' : '+this.state.password);

  }

  register(){
    alert('test');
    return <Route path="/register" component={register} />
  }

  

  render() {
    return (
      
      // <div className="App container">
      //   <Route path="/" component={Home} />
      //   <Route path="/about" component={About} />
      //   <Route path="/posts" component={Post} />
      //   <Route path="/projects" component={Project} />
      // </div>

      <div className="limiter">
         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/posts" component={Post} />
         <Route path="/projects" component={Project} />
         <Route path="/register" component={routes} />

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
                <input class="input100" type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => {this.handleEmailChange(e)}}/>
                <span class="focus-input100"></span>
						    <span class="symbol-input100">
							    <i class="fa fa-envelope" aria-hidden="true"></i>
						    </span>
              </div>
              <div class="wrap-input100 validate-input" >
                <input class="input100" type="password"  placeholder="Password" value={this.state.password} onChange={(e) => {this.handlePasswordChange(e)}}/>
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

export default Login;
