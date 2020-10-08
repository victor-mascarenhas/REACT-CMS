import React from 'react'
import Layout from '../../components/Layout/index'
import {Route} from 'react-router-dom'

import Home from './home/'
import About from './about/'

export default (props) => {
    return (
        <Layout>            
            <Route exact path={props.match.path + 'sobre'} component={About} />
            <Route exact path={props.match.path + '/'} component={Home} /> 
        </Layout>
    )
}
