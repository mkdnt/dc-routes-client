import React, { Component } from 'react'
import RouteContext from './RouteContext'
import Route from './Route'
import PropTypes from 'prop-types'


export class RoutesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            useFilter: false,
            filteredProps: {}
        }
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static propTypes = {
        route: PropTypes.shape({
            id: PropTypes.number.isRequired,
            route_name: PropTypes.string.isRequired,
            dc_area: PropTypes.string.isRequired,
            distance: PropTypes.number.isRequired,
            difficulty: PropTypes.string.isRequired,
            route_type: PropTypes.string.isRequired,
            route_description: PropTypes.string
        })
    }
   
    static contextType = RouteContext;

    

    render() {
    const handleSetFilter = (event) => {
        event.preventDefault()
        this.setState({
            filteredProps: {
                dc_area: event.target['dc_area'].value,
                difficulty: event.target['difficulty'].value,
                route_type: event.target['type'].value
            },
            useFilter: true
        })
    }

    const handleResetFilter = () => {
        this.setState({
            useFilter: false,
            filteredProps: {}
        })
    }

    

    // const filteredRoutes = this.context.routes.filter(route =>
    //     ((route.dc_area === this.filteredProps.dc_area || undefined) && (route.difficulty === this.filteredProps.difficulty || undefined) && (route.route_type === this.filteredProps.route_type || undefined)) ? route : this.context.routes
    // )
    
    // const filteredRoutes = this.context.routes.filter(route => 
    //         this.state.filteredProps.dc_area ? route.dc_area === this.state.filteredProps.dc_area : this.context.routes
    //     )

    // const filteredAreas = filteredRoutes.filter(route => 
    //     route.dc_area.toLowerCase().includes(this.state.filteredProps.dc_area)
    // )
    // const filteredDifficulty = filteredRoutes.filter(route => 
    //     this.state.filteredProps.difficulty ? route.difficulty === this.state.filteredProps.difficulty : filteredRoutes
    // )
    // const filteredType = filteredRoutes.filter(route => 
    //     this.state.filteredProps.route_type ? route.route_type === this.state.filteredProps.route_type : filteredRoutes
    // )

    
        return (
            <div>
                <h2>Routes</h2>
                {!this.state.useFilter &&
                <div>
                <form onSubmit={handleSetFilter}>
                <select name="dc_area" id="dc_area">
                    <option value={null}>DC Area:</option>
                    <option value="Northeast">Northeast</option>
                    <option value="Southeast">Southeast</option>
                    <option value="Northwest">Northwest</option>
                    <option value="Southwest">Southwest</option>
                </select>
                
                <select name="difficulty" id="difficulty">
                    <option value={null}>Difficulty:</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                
                <select name="type" id="type">
                    <option value={null}>Type:</option>
                    <option value="City Streets">City Streets</option>
                    <option value="Residential">Residential</option>
                    <option value="Trail/Path">Trail/Path</option>
                </select>
                <button>Set Filter</button>
                </form>
                
                <ul>
                    {this.context.routes.map(route => 
                    <li key={route.id}>
                        <Route 
                        id={route.id}
                        name={route.route_name}
                        area={route.dc_area}
                        distance={route.distance}
                        type={route.route_type}
                        />
                    </li>)}
                </ul>
                </div>
    }
                {this.state.useFilter &&
                <div>
                 <button onClick={handleResetFilter}>Reset Filter</button>   
                <ul>
                    {this.context.routes.map(route => 
                    <li key={route.id}>
                        <Route 
                        id={route.id}
                        name={route.route_name}
                        area={route.dc_area}
                        distance={route.distance}
                        type={route.route_type}
                        />
                    </li>)}
                </ul>
                </div>}
    
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