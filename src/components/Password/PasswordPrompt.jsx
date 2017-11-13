import React from 'react';

class PasswordPrompt extends React.Component {

  render() {
    return (
      <div className="password-prompt">
        <h3>Change Password</h3>
        <p>Your new password must be different from your online ID, and different from your previous five passwords.</p>
      </div>
    );
  }
}

export default PasswordPrompt;
