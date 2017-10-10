import React from 'react';
import { observer } from "mobx-react";
import { Login } from '../Login/Login';
import { Search } from '../Search/Search';

@observer class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search />
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
