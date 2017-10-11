import React from 'react';
import { Explanation } from '../Explanation/Explanation';
import { Welcome } from '../Welcome/Welcome';

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let loginOrExplanation;
    console.log(this.state)
    if (this.state.isLoggedIn) {
      loginOrExplanation = <Explanation />;
    } else {
      loginOrExplanation = <Welcome />;
    }

    return (
      <div className="landing">
        <div className="welcome-info">
          <img className='first-net-logo' alt="first-net-logo" src={require('../../../images/logo.png')} />
          <div className="welcome-text">
            <Explanation />
          </div>
        </div>
      </div>
    );
  }
}
