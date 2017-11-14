import React from 'react';
import PasswordPrompt from './PasswordPrompt';
import PasswordField from './PasswordField';
import ChangePasswordButton from './ChangePasswordButton';

class PasswordForm extends React.Component {
  renderPasswordForm() {
    return (
      <main className='password-form'>
        <PasswordPrompt/>
        <PasswordField label="Old"/>
        <PasswordField
          label="New"
          needsValidation={true}
          {...this.props}/>
        <PasswordField label="Confirm"/>
        <ChangePasswordButton/>
      </main>
    );
  }
  render() {
    return this.renderPasswordForm();
  }
}

export default PasswordForm;
