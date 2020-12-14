import React, { Component } from 'react'

export class Routes extends Component {
    render() {
        return (
            <div>
                <h2>Routes</h2>
        <div>
            <select class="filter" size="1">
                <option name="rating">DC Area:</option>
                <option name="rating">Northeast</option>
                <option name="rating">Southeast</option>
                <option name="rating">Northwest</option>
                <option name="rating">Southwest</option>
            </select>
            <select class="filter" size="1">
                <option name="rating">Distance:</option>
                <option name="rating">1-5 miles</option>
                <option name="rating">6-12 miles</option>
                <option name="rating">13-20 miles</option>
                <option name="rating">20+ miles</option>
            </select>
            <select class="filter" size="1">
                <option name="rating">Difficulty:</option>
                <option name="rating">Low</option>
                <option name="rating">Medium</option>
                <option name="rating">High</option>
            </select>
            <select class="filter" size="1">
                <option name="rating">Type:</option>
                <option name="rating">City Streets</option>
                <option name="rating">Residential</option>
                <option name="rating">Trail/Path</option>
            </select>
        </div>
        <section class='routes-list'>
            <div class='routes'>
                <h4>Anacostia River Out and Back</h4>
                <h5>Southeast DC</h5>
                <h5>4 miles</h5>
                <h5>Difficulty: Low</h5>
                <h5>Type: Trail/Path</h5>
            </div>
            <div class='routes'>
                <h4>Capitol Tour</h4>
                <h5>Northeast DC</h5>
                <h5>6 miles</h5>
                <h5>Difficulty: Medium</h5>
                <h5>Type: City Streets</h5>
                <p>Beginning at the northeast corner of the US Capitol, run along Constitution Avenue, taking in landmarks along the National Mall, such as the Washington Monument, WWII Memorial, and various Smithsonian Museums.</p>
                <p>At the midpoint on 23rd St NW, there is a steep hill, which increases the difficulty of an otherwise flat run. After that, K Street will let you see the financial and business hub of DC as you make your way back to your starting point.</p>
                <br />
                <button>View Map</button>
            </div>
            <div class='routes'>
                <h4>American University Hill</h4>
                <h5>Northwest DC</h5>
                <h5>4 miles</h5>
                <h5>Difficulty: High</h5>
                <h5>Type: City Streets</h5>
            </div>
        </section>
            </div>
        )
    }
}

export default Routes
