import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Login from '../components/Login'

const createRoutes = () => {
    return (
        <Route path='/' component={Template}>
            <IndexRoute component={Login}/>
            <Route path={'/callback'} component={Home}/>
        </Route>
    )
}

const Routes = createRoutes()

export default Routes
