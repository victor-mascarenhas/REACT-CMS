import React from 'react'
import {Route, Router, Switch, Redirect} from 'react-router-dom'
import history from './config/history'
import Portal from './views/portal'
import Admin from './views/admin'
import Login from './views/login'
import {isAuthenticated} from './config/auth'

const AuthRoute = ({ ...rest }) => {
    if(!isAuthenticated()) {
    return <Redirect to='/login' />
    }
    return <Route {...rest} />
  }


const Routers = () => (
    <Router history={history}>
        <Switch>        
            <AuthRoute component={Admin} path="/admin" />
            <Route exact component={Login} path="/login" />               
            <Route component={Portal} path="/" />           
        </Switch>
    </Router>
)


export default Routers