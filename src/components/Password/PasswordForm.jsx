import React from 'react';
import PasswordPrompt from './PasswordPrompt';
import OldPassword from './OldPassword';
import NewPassword from './NewPassword';
import ChangePasswordButton from './ChangePasswordButton';

class PasswordForm extends React.Component {

  render() {
    return (
      <main className='password-form container'>
        <PasswordPrompt/>
        <OldPassword/>
        <NewPassword/>
        <ChangePasswordButton/>
      </main>
    );
  }
}

export default PasswordForm;
