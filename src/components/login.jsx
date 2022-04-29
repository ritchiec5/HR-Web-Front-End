import React, { Component } from "react";
import "../login_page_style.css";
import { Link } from "react-router-dom";
import { message } from 'antd';
import Button from '@mui/material/Button';

// fonts
import "@fontsource/gothic-a1"
import "@fontsource/playfair-display"

const account1 = {
  username: "Employer",
  password: "123",
};

const account2 = {
  username: "Employee",
  password: "abc",
};

let errorState = 0;

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Event handler for username
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  //Event handler for password
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  //Event handler
  handleSubmit() {
    //Employer acc
    if (
      this.state.username === account1.username &&
      this.state.password === account1.password
    ) {
      errorState = 0;
      return "/Employer";
    }
    //Employee acc
    else if (
      this.state.username === account2.username &&
      this.state.password === account2.password
    ) {
      errorState = 0;
      return "/Employee";
    }
    //Wrong info
    else {
      errorState = 1;
      return "/";
    }
  }

  errorMsg(event) {
    if (event === 0) {
      message.success("Welcome!");
    }
    if (event === 1) {
      message.error("Invalid Credentials!");
    }
  }

  render() {
    return (
      <div className="login-whitespace">
        <div className="login-maintext">HR Application</div>
        <div className="login-minitext">
          <label>
            <input
              placeholder="User ID"
              className="login-input"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div className="login-minitext">
          <label>
            <input
              placeholder="Password"
              className="login-input"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div className="login-btnpadding">
          <Link to={this.handleSubmit}>
            <Button 
              style={{
                backgroundColor: "#958484",
                fontFamily: "Gothic A1",
                fontWeight: 600
              }}
              variant="contained"
              className="login-btn"
              onClick={() => this.errorMsg(errorState)}
            >
              L O G I N
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LogIn;
