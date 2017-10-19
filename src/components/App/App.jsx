import React from 'react';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';

import { masterStore } from '../../core/stores/master.store';

import Routers from '../Router/routers';

@observer class App extends React.Component {


  headerSection() {
    return (
      <div className="App-header">
        <h3>FirstNet App Review Utility</h3>
      </div>
    )
  }

  // Main App returns only the header (Which should be extracted to a separate component) and the router which decides what should be sown, and handles auth checks
  render() {
    return (
      <main>
        {this.headerSection()}
        <div className="App-body">
          <BrowserRouter>
            <Provider store={masterStore}>
              <Routers route={masterStore.currentView} isAuthenticated={masterStore.loginStore.isAuthenticated} />
            </Provider>
          </BrowserRouter>
        </div>
      </main>
    );
  }
}

export default App;
