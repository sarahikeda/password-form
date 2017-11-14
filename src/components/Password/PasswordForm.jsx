import React from 'react';
import PasswordPrompt from './PasswordPrompt';
import PasswordField from './PasswordField';
import ChangePasswordButton from './ChangePasswordButton';

class PasswordForm extends React.Component {

  render() {
    return (
      <main className='password-form container'>
        <PasswordPrompt/>
        <PasswordField label="Old"/>
        <PasswordField label="New" needsValidation={true}/>
        <PasswordField label="Confirmed"/>
        <ChangePasswordButton/>
      </main>
    );
  }
}

export default PasswordForm;
