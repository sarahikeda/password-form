import React from 'react';
import { Welcome } from '../Welcome/Welcome';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      isLoggedIn: false
    };
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event){
    this.setState({id: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoggedIn: true})
    // go to services and login user with S3 Credentials
    console.log(this.state)
  }

  render() {
    return (
      <div className="landing">
        <div className="welcome-info">
          <img className='first-net-logo' alt="first-net-logo" src={require('../../../images/logo.png')} />
          <div className="welcome-text">
            <Welcome />
          </div>
        </div>
        <form className="login" onSubmit={this.handleSubmit}>
          <label>User ID</label>
          <input type='text' className="user-fields" name="id" value={this.state.id} onChange={this.handleIdChange}/>
          <label className="user-fields"><span>Password</span></label>
          <input type='text' name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <button type="submit" className="submit-form">Sign In</button>
        </form>
      </div>
    );
  }
}
