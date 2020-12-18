import React, { Component } from 'react'
import Route from './Route'
import Filters from './Filters'
import RouteContext from './RouteContext'

export class RoutesList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = RouteContext;

    render() {
       const { routes=[] } = this.context
       console.log(routes)
        return (
            <div>
                <h2>Routes</h2>
                <Filters />
                <ul>
                    {routes.map(route => 
                    <li key={route.id}>
                        <Route 
                        id={route.id}
                        name={route.route_name}
                        area={route.dc_area}
                        distance={route.distance}
                        difficulty={route.difficulty}
                        type={route.route_type}
                        description={route.description}
                        />
                    </li>    
                    )}
                </ul>
            </div>
        )
    }
}

export default RoutesList

/*

 const routes = this.context.routes.map(route => <RoutesItem key={route.id} route={route}/>)

const dc_area = this.context.areas.map((id, area) => <option name="dc_area" id="dc_area" value={id}>{area}</option>)


Amalia Avram6:44 PM
id:1, dc_area:'Norheast

id:2,dc_area:Southeast

let countriesList = countries.length > 0 && countries.map((item, i) => { return ( <option key={i} value={item.id}>{item.name}</option> ) }, this);

*/