import React, { Component } from 'react'
//import routesData from './store'
import RoutesItem from './RoutesItem'
import Filters from './Filters'
import RouteContext from './RouteContext'

export class RoutesList extends Component {
    static contextType = RouteContext;

    render() {
        const routes = this.context.routes.map(route => <RoutesItem key={route.id} route={route}/>)
        return (
            <div>
                <h2>Routes</h2>
                <Filters />
                <div>
                    {routes}
                </div>
            </div>
        )
    }
}

export default RoutesList
