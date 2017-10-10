import React from 'react';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: ''
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
    console.log(this.state)
    // go to services and login user with S3 Credentials
  }

  render() {
    return (
      <div className="login">
        <div className="welcome-info">
          <img className='first-net-logo' alt="first-net-logo" src={require('../../../images/logo.png')} />
          <div className="welcome-text">
            <h3>Welcome to the FirstNet App Review Utility. Please sign in to get started.</h3>
          </div>
        </div>
        <form className="user-info" onSubmit={this.handleSubmit}>
          <label><span>User ID</span></label>
          <input type='text' className="user-fields" name="id" value={this.state.id} onChange={this.handleIdChange}/>
          <label><span>Password</span></label>
            <input type='text'className="user-fields"  name="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <input className="submit-button" type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}
