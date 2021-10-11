import './App.css'; 
import Logo from './images/logo.svg';
import Login from './pages/Login';
import Register from './pages/Register';
import Done from './pages/Done';
import Delivered from './pages/Delivered';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import Menu from './pages/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Preparing from './pages/Preparing';

function App() {
  return (
    <Router>
      <div className="container">
        <img className="logo" src={Logo} alt="logo-burger-queen"/>
      </div>
      <Switch>
        <Route exact path="/" component={Login}/> 
        <Route exact path="/register" component={Register}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/preparing" component={Preparing}/>
        <Route exact path="/done" component={Done}/>
        <Route exact path="/delivered" component={Delivered}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </Router> 
  );
}

export default App;
