import React, { Component } from 'react'
import RouteContext from './RouteContext'
import Route from './Route'
import { Link } from 'react-router-dom';


export class RouteItem extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = RouteContext;

    render() {
       const { routes } = this.context
        const { routeId } = this.props.match.params
        const route = routes.find(route => route.id === Number(routeId))

        return (
            
            <div>
                <Route 
                    id={route.id}
                    name={route.route_name}
                    area={route.dc_area}
                    distance={route.distance}
                    difficulty={route.difficulty}
                    type={route.route_type}
                    description={route.description}
                />
                <Link 
                to={`/route/${route.id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button type='button' onClick={this.handleClickDelete}>Delete</button>
            </div>
        )
    }
}

export default RouteItem
