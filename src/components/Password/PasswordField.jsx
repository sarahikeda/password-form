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
      passwordInput: '',
      showValidation: true
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

  showValidation = () => {
    this.setState({
      showValidation: true
    })
  }

  hideValidation = () => {
    this.setState({
      showValidation: false
    })
  }


  renderPasswordField() {
    let validationCheck = this.props.needsValidation && this.state.showValidation && this.state.hasPasswordInput ? <ValidationBox passwordInput={this.state.passwordInput} {...this.props}/> : null

    return (
      <div className="password-field">
        <FormGroup>
          <ControlLabel className="password-label">{this.props.label} Password</ControlLabel>
          <InputGroup>
            <FormControl
              className="password-input"
              type={this.state.type}
              onFocus={this.showValidation}
              onBlur={this.hideValidation}
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
  render() {
    return this.renderPasswordField();
  }
}

export default PasswordField;
