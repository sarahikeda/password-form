import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';
import ValidationBox from './ValidationBox'

class PasswordField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      hasPasswordInput: false,
      passwordInput: ''
    }
  }

  setPasswordInput = (e) => {
    this.setState({
      hasPasswordInput: true,
      passwordInput: e.target.value
    })
  }

  showHidePassword = () => {
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  render() {
    let validationCheck = this.props.needsValidation && this.state.hasPasswordInput ? <ValidationBox passwordInput={this.state.passwordInput}/> : null
    return (
      <div className="password old-password">
        <FormGroup>
          <ControlLabel>{this.props.label} Password</ControlLabel>
          <InputGroup>
            <FormControl
              className="password-input"
              type={this.state.type}
              onChange={this.setPasswordInput}/>
            {validationCheck}
            <InputGroup.Addon
              className='password-button'
              onClick={this.showHidePassword}>
              <FontAwesome
                className='eye-icon'
                name='eye'/>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default PasswordField;
