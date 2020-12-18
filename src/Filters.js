import React, { Component } from 'react'

export class Filters extends Component {
    render() {
        return (
            <div>
                <select className="filter" size="1">
                <option name="rating">DC Area:</option>
                <option name="rating">Northeast</option>
                <option name="rating">Southeast</option>
                <option name="rating">Northwest</option>
                <option name="rating">Southwest</option>
            </select>
            <select className="filter" size="1">
                <option name="rating">Distance:</option>
                <option name="rating">1-5 miles</option>
                <option name="rating">6-12 miles</option>
                <option name="rating">13-20 miles</option>
                <option name="rating">20+ miles</option>
            </select>
            <select className="filter" size="1">
                <option name="rating">Difficulty:</option>
                <option name="rating">Low</option>
                <option name="rating">Medium</option>
                <option name="rating">High</option>
            </select>
            <select className="filter" size="1">
                <option name="rating">Type:</option>
                <option name="rating">City Streets</option>
                <option name="rating">Residential</option>
                <option name="rating">Trail/Path</option>
            </select>
            </div>
        )
    }
}

export default Filters
