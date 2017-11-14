import React from 'react';
import PasswordPrompt from './PasswordPrompt';
import PasswordField from './PasswordField';
import ChangePasswordButton from './ChangePasswordButton';

class PasswordForm extends React.Component {
  renderPasswordForm() {
    return (
      <main className='password-form container'>
        <PasswordPrompt/>
        <PasswordField label="Old"/>
        <PasswordField
          label="New"
          needsValidation={true}
          {...this.props}/>
        <PasswordField label="Confirmed"/>
        <ChangePasswordButton/>
      </main>
    );
  }
  render() {
    return this.renderPasswordForm();
  }
}

export default PasswordForm;
