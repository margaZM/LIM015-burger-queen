import Done from './pages/Done';
import Delivered from './pages/Delivered';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import Menu from './pages/Menu';
import Logo from './components/Logo';
import { ProvideAuth } from "./use-auth.js";
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Preparing from './pages/Preparing';

const DashboardRoutes = () => {
    // const { isAuthenticated } = props.path 
    // if(isAuthenticated){
    //     return <Route {...props}/>
    // } else{
    //     return <Redirect to="/login" />
    // }
  return (
    <>
      <Logo/>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/preparing" component={Preparing}/>
        <Route exact path="/done" component={Done} />
        <Route exact path="/delivered" component={Delivered} />
        <Route path="*" component={Error404} />
      </Switch>
    </>
  );
}

export default DashboardRoutes
