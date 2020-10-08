import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import history from './config/history'
import Portal from './views/portal'
import Admin from './views/admin'


const Routers = () => (
    <Router history={history}>
        <Switch>            
            <Route component={Admin} path="/admin" />
            <Route component={Portal} path="/" />   
        </Switch>
    </Router>
)


export default Routers