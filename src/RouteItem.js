import React, { Component } from 'react'
import { findRoute } from './routes-helpers'
import RouteContext from './RouteContext'
import Route from './Route'

export class RouteItem extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = RouteContext;

    render() {
       const { routes=[] } = this.context
       console.log("testing here in RouteItem")
       console.log(this.context)
        const { routeId } = this.props.match.params
        const route = findRoute(routes, routeId)

        console.log(routeId)
        return (
            
            <div>
                <Route 
                    id={route.id}
                    name={route.route_name}
                    area={route.dc_area}
                    distance={route.distance}
                    type={route.route_type}
                    description={route.description}
                />
            </div>
        )
    }
}

export default RouteItem
