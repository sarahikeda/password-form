import React from 'react';
import Header from '../Header/Header';
import PasswordForm from '../Password/PasswordForm';

class App extends React.Component {

  render() {
    return (
      <main className='container'>
        <Header/>
        <PasswordForm/>
      </main>
    );
  }
}

export default App;
