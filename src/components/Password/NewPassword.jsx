import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

class NewPassword extends React.Component {

  render() {
    return (
      <div className="password new-password">
        <FormGroup>
          <Col xs={10}>
            <ControlLabel>New Password</ControlLabel>
            <FormControl
              className="password-input"
              type="password"/>
          </Col>
          <Col xs={10}>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              className="password-input"
              type="password"/>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default NewPassword;
