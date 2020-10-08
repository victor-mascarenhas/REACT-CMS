import React from 'react'
import {Route} from 'react-router-dom'

import Dash from './dash'

export default (props) => {
    return (   
        <React.Fragment>  
            <Route exact path={props.match.path + '/services'} component={() => <h1>Services</h1>} />            
            <Route exact path={props.match.path + '/'} component={Dash} />
            </React.Fragment>   
        )
}
