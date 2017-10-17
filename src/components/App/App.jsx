import React from 'react';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../../../images/logo.png';
//import Search from '../Search/Search';
import Routers from '../Router/routers';
import { loginStore } from '../../core/stores/login.store';
import { appStore } from '../../core/stores/app.store';
import { masterStore } from '../../core/stores/master.store';

@observer class App extends React.Component {
  componentDidMount() {
    appStore.loadData();
  }

  headerSection = () => (
    <div className="App-header">
      <h3>FirstNet App Review Utility:{appStore.getStatus}</h3>
    </div>)


  render() {
    console.log(window.location.href)
    return (
      <main>
        {this.headerSection()}
        <div className="App-body">
          {/* <img role="userpresentation" src={logo} /> */}
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
