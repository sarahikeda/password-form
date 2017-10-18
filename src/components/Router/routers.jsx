import React from 'react';
import { observer } from 'mobx-react';
import { Route, Redirect, Switch } from 'react-router-dom';

//routes
import LoginAuth from '../Login/LoginAuth';
import { Welcome } from '../Welcome/Welcome';

@observer class Routers extends React.Component {

  notFound() {
    return (
      <div>
        404 Page Not Found
      </div>
    )
  }

  forceLogin() {
    return (
      <LoginAuth />
    )
  }

  // If we match a path, render it, otherwise fall back on "notFound" - notFound should really be a full component, but we're keeping things simple here.
  routes() {
    return (
      <Switch>
        <Route path="/" component={Welcome} />
        {/* <Route path="/error" component={this.errorContent} /> */}
        {/* <Route path="/session-timeout" component={SessionTimeoutPage} /> */}
        <Route component={this.notFound} />
      </Switch>
    )
  }

  render() {
    return (
      // if the user isn't authenticated, alway send them to the login page. This check will run on every render
      this.props.isAuthenticated ? (this.routes()) : (this.forceLogin())
    )
  }
};

export default Routers;
