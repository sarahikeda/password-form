import React from 'react';
import {observer} from 'mobx-react';
import Login from '../Login/login';
import logo from '../../../images/logo.png';
import {loginStore} from '../../core/stores/login.store';

@observer class App extends React.Component {
  constructor(props) {
		super(props);
    console.log(this.props.appStore);
		this.store = this.props.appStore;
	}

  componentDidMount() {
    this.store.loadData();
  }

  getStatus=()=>this.store.getStatus

  render(){
    return (<div className="App">
      <div className="App-header">
        <h3>FirstNet App Review Utility:{this.getStatus()}</h3>
        <Search />
      </div>
      <div className="App-body">
        <img role="presentation" src={logo}/>
        <Login store={loginStore}/>
      </div>
    </div>
  )
  }
}

export default App;
