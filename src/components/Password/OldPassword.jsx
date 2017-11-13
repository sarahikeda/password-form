import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormGroup, ControlLabel, FormControl, Col, InputGroup } from 'react-bootstrap';

class OldPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'input'
    }
  }

  showHidePassword = () => {
    console.log(this.state.type)
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  render() {
    return (
      <div className="password old-password">
        <FormGroup>
          <Col xs={10}>
            <ControlLabel>Old Password</ControlLabel>
            <InputGroup>
              <FormControl className="password-input"
              type={this.state.type}/>
            <InputGroup.Addon className='password-button'
            onClick={this.showHidePassword}>
                <FontAwesome
                  className='eye-icon'
                  name='eye'/>
              </InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default OldPassword;
