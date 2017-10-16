import React from 'react'
import {  BrowserRouter as Router,Route,Redirect} from 'react-router-dom'


const AuthRouter = (props) =>{

  const [body] = [...props.subs];
 //console.log(header, body);
  return <Router>
    <div>
      <Route  path="/login" component={body}/>
      {/*<PrivateRoute path="/protected" component={Protected}/>*/}
      <Redirect from='/' to='/login'/>
    </div>
  </Router>
};

export default AuthRouter ;
