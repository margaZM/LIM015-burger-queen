import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgotPass';
import Logo from './components/Logo';
import Profile from './pages/Profile';
import Done from './pages/Done';
import Delivered from './pages/Delivered';
import Error404 from './pages/Error404';
import Menu from './pages/Menu';
import Preparing from './pages/Preparing';

const App = () => {

  return (
    <Router >
      <Logo/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgotpass" component={ForgotPass}/>
        <Route path="/profile" component={Profile} />
        <Route path="/menu" component={Menu} />
        <Route path="/preparing" component={Preparing}/>
        <Route path="/done" component={Done} />
        <Route path="/delivered" component={Delivered} />
        <Route path="*" component={Error404} /> 
      </Switch>
    </Router>
  );
}

export default App;
