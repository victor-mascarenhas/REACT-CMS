import React from 'react'
import Layout from '../../components/Layout/index'
import {Route} from 'react-router-dom'

import Home from './home/'
import Product from './product/'
import Services from './services/'
import Contact from './contact/'
import About from './about/'



export default (props) => {
    return (
        <Layout>            
            <Route exact path={props.match.path + 'sobre'} component={About} />
            <Route exact path={props.match.path + 'produtos'} component={Product} />
            <Route exact path={props.match.path + 'servicos'} component={Services} />
            <Route exact path={props.match.path + 'contato'} component={Contact} />
            <Route exact path={props.match.path + '/'} component={Home} /> 
        </Layout>
    )
}
