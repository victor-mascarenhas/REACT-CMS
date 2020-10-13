import React from 'react'
import {Route} from 'react-router-dom'
import LayoutAdmin from '../../components/Layout/admin'
import Dash from './dash'

export default (props) => {
    return (   
        <LayoutAdmin>  
            <Route exact path={props.match.path + '/services'} component={() => <h1>Services</h1>} />            
            <Route exact path={props.match.path + '/'} component={Dash} />
            </LayoutAdmin>   
        )
}
