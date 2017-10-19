import React from 'react';
import { inject, observer } from 'mobx-react';
import {getCurrentFolder} from '../../utils';

@inject('store')
@observer export class Welcome extends React.Component {

  handleClick = (e, file) => {
    e.preventDefault();
    console.log(file);
    this.props.store.awsStore.getFile(file.Key)
  }

  render() {
    return (
      <div className="login">
        <div className="welcome-info">
          {/* <img className='first-net-logo' alt="first-net-logo" src={require('../../../images/logo.png')} /> */}
          {/* <div className="welcome-text">
            <h3>Welcome Sean to the FirstNet App Review Utility. </h3>
            <p>To review an Application simply type the application name in the field above (Find Application) or find all applications by status by selecting from top right menu.</p>
            <p>Below are all apps with a status of UNDER REVIEW...</p>
          </div> */}
        </div>
        <div>
          <ul>
          {this.props.store.awsStore.remoteFiles.map((file, key) => {
            let name = file.Key.substr(26);
            console.log(getCurrentFolder(file))
            if (name.length === 0) return null;
            return (
              <li key={key} onClick={(e) => this.handleClick(e, file)}>{name}</li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}


