import React from 'react';
import {observer} from 'mobx-react';
import Login from '../Login/login';
import logo from '../../../images/logo.png';
//import {appStore} from '../../core/stores/app.store';

class App extends React.Component {
  constructor(props) {
		super(props);
		//this.store = this.props.resource;
	}

  /*onLoadData = () => {
		this.store.loadData();
  };

  showeData = () => {
		let jsx ='';
    console.log(this.store.getAllKeyNames);
    if(this.store.getAllKeyNames){
      jsx=<ul>
            { this.store.getAllKeyNames.map((obj,indx)=><li key={indx}>{obj}</li>) }
          </ul>
    }
		return jsx;
	};

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App Review</h2>
        </div>
        <p className="App-intro">
          Hello World!
        </p>
        <h2>How about we load some data from an API!</h2>
        <button onClick={this.onLoadData}>Load Data</button>
        {this.showeData()}
      </div>
    );
  }*/

  render(){
    return (<div className="App">
      <div className="App-header">
        <h2>FirstNet App Review Utility:</h2>
      </div>
      <div className="App-body">
        <img src={logo}/>
        <Login/>
      </div>
    </div>
  )
  }
}

export default App;
