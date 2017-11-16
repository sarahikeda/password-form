import React from 'react';
import { Button } from 'react-bootstrap';

class ChangePasswordButton extends React.Component {
  renderChangePasswordButton() {
    return (
      <Button
        className="btn-primary change-password-button"
        bsSize="large">Change Password
      </Button>
    );
  }

  render() {
    return this.renderChangePasswordButton();
  }
}

export default ChangePasswordButton;
