import React from 'react';
import { Button } from 'react-bootstrap';

class ChangePasswordButton extends React.Component {

  render() {
    return (
      <Button bsStyle="primary change-password-button" bsSize="large">Change Password</Button>
    );
  }
}

export default ChangePasswordButton;
