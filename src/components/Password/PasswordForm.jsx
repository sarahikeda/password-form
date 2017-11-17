import React from 'react';
import PasswordPrompt from './PasswordPrompt';
import PasswordField from './PasswordField';
import ChangePasswordButton from './ChangePasswordButton';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showValidation: false
    }
  }

  toggleValidation = () => {
    this.setState({
      showValidation: !this.state.showValidation
    })
  }

  renderPasswordForm() {
    return (
      <main className='password-form'>
        <PasswordPrompt/>
        <PasswordField label="Old"/>
        <PasswordField
          label="New"
          showValidation={this.state.showValidation}
          toggleValidation={this.toggleValidation}
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
