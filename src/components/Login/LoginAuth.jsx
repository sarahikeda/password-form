import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { SignInPrompt } from '../SignInPrompt/SignInPrompt';
import '../../../styles/Login/login.css';

@inject('store')
@observer class LoginAuth extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.awsStore;
  }

  handleChange = (e) => {
    const target_id = e.target.id;
    switch (target_id) {
      case 'uid':
        return this.store.updateUserId(e.target.value);
      case 'pwd':
        return this.store.updatePwd(e.target.value);
      default:
        return event.preventDefault();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userid, password } = this.store.loginInfo;
    this.store.login(userid, password);
  }

  loginFailedMessage() {
    return (
      this.store.errorLogin
        ? (
          <p className="error-login">{this.store.errorLogin}
            <span className="glyphicon glyphicon-warning-sign"> </span>
          </p>
        )
        : null
    )
  }


  validateForm() {
    return this.store.loginInfo.userid && this.store.loginInfo.password
  }

  render() {
    return (
      <div className="Login">
        <SignInPrompt />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="uid">
            <ControlLabel>User ID: </ControlLabel>
            <FormControl
              autoFocus
              type="uid"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="pwd" >
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              type="pwd"
            />
          </FormGroup>
          <Button className="btn-md sign-in" disabled={!this.validateForm()} onClick={this.handleSubmit} type="submit">
            Sign In
          </Button>
          {this.loginFailedMessage()}
        </form>

      </div>
    )
  }
}

export default LoginAuth;
