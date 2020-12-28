import React, { Component } from 'react'
import RouteContext from './RouteContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


export class Route extends Component {
    
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

    static contextType = RouteContext

    render() {
        const { id, name, area, distance, type, difficulty, description } = this.props
        return (
            <div>
                <Link 
                to={`/route/byid/${id}`}>
                <h4>{name}</h4>
                </Link>
                <h5>{area}</h5>
                <h5>{distance} miles</h5>
                <h5>{difficulty}</h5>
                <h5>{type}</h5>
                <h5>{description}</h5>
                
            </div>
        )
    }
}

export default Route