import React from 'react';
import Header from '../Header/Header';
import PasswordForm from '../Password/PasswordForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordConditions: [{rule: /.{7,}/, description: '7 characters minimum'}, {rule: /[a-z]/, description: 'Lowercase letter'}, {rule: /[A-Z]/, description: 'Capital letter'}, {rule: /\d+/, description: 'Number'}, {rule: /[-\/\\^$*+?.()!|[\]{}#@%&]/, description: 'Special character'}]
    }
  }
  renderApp() {
    return (
      <main className='container'>
        <Header/>
        <PasswordForm {...this.state}/>
      </main>
    );
  }

  render() {
    return this.renderApp();
  }
}

export default App;
