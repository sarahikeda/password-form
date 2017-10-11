import React from 'react';

export class Welcome extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="welcome-info">
          <img className='first-net-logo' alt="first-net-logo" src={require('../../../images/logo.png')} />
          <div className="welcome-text">
            <h3>Welcome Sean to the FirstNet App Review Utility. </h3>
            <p>To review an Application simply type the application name in the field above (Find Application) or find all applications by status by selecting from top right menu.</p>
            <p>Below are all apps with a status of UNDER REVIEW...</p>
          </div>
        </div>
      </div>
    );
  }
}
