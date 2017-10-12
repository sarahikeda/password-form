import React from 'react';
import {observer} from 'mobx-react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../../../styles/Login/login.css';



@observer class Login extends React.Component{
  constructor(props){
    super(props);
    this.store = this.props.store;
  }
  handleSubmit = event => event.preventDefault();

  handleChange=(e)=>{
    const target_id=e.target.id;
    console.log(target_id);

    switch (target_id) {
      case 'uid':
        return this.store.updateUserId(e.target.value);
      case 'pwd':
        return this.store.updatePwd(e.target.value);
      default:
        return event.preventDefault();
    }
  }

  onButtonClick =()=>{
    const {userid,password} = this.store.loginInfo;
    console.log(userid,password);
    this.store.login(userid,password);
    //this.store.validateSignIn(userid,password);
  }

  validateForm=()=>this.store.loginInfo.userid && this.store.loginInfo.password

  render(){
    return(
      <div className="Login">
        <p className='text'>Welcome to the FirstNet App Review Utility. Please sign in to get started.</p>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="uid" bsSize="large">
            <ControlLabel className="controll-label">User ID: </ControlLabel>
            <FormControl
              autoFocus
              type="uid"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="pwd" bsSize="large">
            <ControlLabel className="controll-label" >Password:</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              type="pwd"
            />
            <Button
              bsSize="large"
              disabled={!this.validateForm()}
              onClick={this.onButtonClick}
              type="submit"
              className="sign-in">
              Sign In
            </Button>
          </FormGroup>
        </form>
        <p>{this.store.errorLogin}</p>
      </div>
    )
  }
}

export default Login;
