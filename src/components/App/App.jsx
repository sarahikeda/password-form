import React from 'react';
import {observer} from 'mobx-react';
import LoginAuth from '../Login/LoginAuth';
import logo from '../../../images/logo.png';
//import Search from '../Search/Search';
import {loginStore} from '../../core/stores/login.store';

@observer class App extends React.Component {
  constructor(props) {
		super(props);
    //console.log(this.props.appStore);
		this.store = this.props.appStore;
	}

  componentDidMount() {
    this.store.loadData();
  }

  headerSection=()=>(
    <div className="App-header">
      <h3>FirstNet App Review Utility:{this.store.getStatus}</h3>
    </div>)

  loginBody=()=>(
    <div className="App-body">
      <img role="presentation" src={logo}/>
      <LoginAuth store={loginStore}/>
    </div>)

  render(){
    return (<div className="App">
    {this.headerSection()}
    {this.loginBody()}
    </div>
  )
  }
}

export default App;
