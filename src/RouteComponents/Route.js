import React, { Component } from 'react'
import RouteContext from './RouteContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Route.css'


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
            <div className='route-card'>
                <Link 
                to={`/route/byid/${id}`}
                style={{textDecoration: 'none', color: 'inherit'}}>
                <h3>{name}</h3>
                </Link>
                <h5>{area} | {type}</h5>
                <h5>{distance} miles | Difficulty: {difficulty}</h5>
                <p>{description}</p>
            </div>
        )
    }
}

export default Route