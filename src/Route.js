import React, { Component } from 'react'
import RouteContext from './RouteContext'
import { Link } from 'react-router-dom'

export class Route extends Component {
    static defaultProps ={
        onDeleteNote: () => {}
    }



static contextType = RouteContext
    render() {
        const { id, name, area, distance, type, difficulty, description } = this.props
        return (
            <div>
                <Link 
                to={`/route/${id}`}>
                <h4>{name}</h4>
                </Link>
                <h5>{area}</h5>
                <h5>{distance} miles</h5>
                <h5>{difficulty}</h5>
                <h5>{type}</h5>
                <h5>{description}</h5>
                <br />
            </div>
        )
    }
}

export default Route