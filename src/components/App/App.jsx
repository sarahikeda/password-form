import React from 'react';
import Header from '../Header/Header';
import PasswordForm from '../Password/PasswordForm';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordConditions: [{rule: /.{7,}/, description: '7 characters minimum'}, {rule: /[a-z]/, description: 'Lowercase letter'}, {rule: /[A-Z]/, description: 'Capital letter'}, {rule: /\d+/, description: 'Number'}, {rule: /[-\/\\^$*+?.()!|[\]{}#@%&]/, description: 'Special character'}]
    }
  }
  renderApp() {
    return (
      <div className='container app-body'>
        <Header/>
        <main>
          <PasswordForm {...this.state}/>
        </main>
        <Footer/>
      </div>
    );
  }

  render() {
    return this.renderApp();
  }
}

export default App;
