import React from 'react';
import {observer} from 'mobx-react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../../../styles/Login/login.css';



export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.login = this.props.loginStore;
  }
  handleSubmit=()=>{

  }
  handleChange=()=>{

  }

  validateForm=()=>{

  }

  render(){
    return(
      <div className="Login">
        <p className='text'>Welcome to the FirstNet App Review Utility. Please sign in to get started.</p>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="userid" bsSize="large">
            <ControlLabel className="controll-label">User ID: </ControlLabel>
            <FormControl
              autoFocus
              type="userid"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="controll-label" >Password:</ControlLabel>
            <FormControl
              value={this.login}
              onChange={this.handleChange}
              type="password"
            />
            <Button
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              className="sign-in">
              Sign In
            </Button>
          </FormGroup>

        </form>
      </div>
    )
  }
}
