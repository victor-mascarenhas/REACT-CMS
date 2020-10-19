import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import history from './config/history'
import Portal from './views/portal'
import Admin from './views/admin'
import Login from './views/login'


const Routers = () => (
    <Router history={history}>
        <Switch>            
            <Route component={Admin} path="/admin" />
            <Route exact component={Login} path="/login" />   
            <Route component={Portal} path="/" />   
            
        </Switch>
    </Router>
)


export default Routers