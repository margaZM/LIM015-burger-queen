import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'

let auth;
const user = localStorage.getItem('email');
if(user ) {}
user? auth = true: auth = false

const PrivateRoute = ({children, ...props})=> {
    return (<Route {...props} render={()=>  auth? (children): <Redirect to='/'/> }/>);
}

export default PrivateRoute


// const PrivateRoute = ({component: Component, ...rest})=> <Route {...rest}> {auth? <Component/> : <Redirect to='/'>} <Route />
{/* <Route {...props} /> {auth? <Component/> :  <Redirect to='/'/> }  </Route> */}