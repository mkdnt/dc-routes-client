import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RouteContext from './RouteContext'

export class Route extends Component {

static contextType = RouteContext
    render() {
        const { id, name, area, distance, type } = this.props
        return (
            <div>
                <Link 
                to={`/route/${id}`}>
                <h4>{name}</h4>
                </Link>
                <h5>{area}</h5>
                <h5>{distance} miles</h5>
                <h5>{type}</h5>
                <br />
            </div>
        )
    }
}

export default Route