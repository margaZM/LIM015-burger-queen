import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgotPass';
import Logo from './components/Logo';
import Profile from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
// import { watcherAuthentication} from './firebase/auth';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

function App() {

  const [userauth, setuserauth] = useState('')

  onAuthStateChanged(auth, (user) => setuserauth(user));
  // console.log(watcherAuthentication(auth))  
  console.log(userauth)    
  return (
    <Router >
      <Logo/>
      <Switch>
        {/* <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgotpass" component={ForgotPass}/>
        <Route path="/" component={DashboardRoutes}> </Route>

         <Route path="/">
          {userauth ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route> */}

          {/* <Router>
            <Switch>
              <Route path="/login" exact component={Login}></Route>
              <PrivateRoute path="/profile" auth={auth} component={Profile}></PrivateRoute>
            </Switch>
          </Router> */}
        {/* {
          !userauth ? 
          <>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/register" component={Register}/>
                  <Route exact path="/forgotpass" component={ForgotPass}/>
          </> :
                  <Route path="/" component={DashboardRoutes}> </Route>
        } */}


         {/* <Route path="/">
          {userauth ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route> */}
        




      </Switch>
    </Router>
  );
}

export default App;
