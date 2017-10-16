import React from 'react'
import {  BrowserRouter as Router,Route} from 'react-router-dom'


const AuthRouter = (props) =>{
  const body = props.subs;
  return <Router>
    <div>
      <Route path="/login" component={body}/>
      {/*<PrivateRoute path="/protected" component={Protected}/>*/}
    </div>
  </Router>
};

export default AuthRouter ;
