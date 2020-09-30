import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import history from './config/history'
import {
    Home,
    Dash as AdminDash
} from './views'


const Routers = () => (
    <Router history={history}>
        <Switch>
            <Route component={Home} exact path="/" />   
            <Route component={AdminDash} path="/admin" />  
        </Switch>
    </Router>
)


export default Routers