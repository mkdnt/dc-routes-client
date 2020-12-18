import React, { Component } from 'react'
import RouteContext from './RouteContext'
import config from './config'

export class AddNew extends Component {
    static contextType = RouteContext

    handleClickCancel = () => {
        this.props.history.push('/')
}

    render() {
        const handleSubmit = (event) => {
            const newRoute = {
                route_name: event.target['new-route-name'].value,
                dc_area: event.target['dc_area'].value,
                distance: event.target['new-route-distance'].value,
                difficulty: event.target['difficulty'].value,
                route_type: event.target['type'].value,
                route_description: event.target['new-route-description'].value
            }
            fetch(`${config.API_ENDPOINT}/routes`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newRoute),
            })
                .then(res => {
                    if (!res.ok)
                        return res.json().then(e => Promise.reject(e))
                        return res.json()
                })
                .then(route => {
                    this.context.addRoute(route)
                })
                .catch(error => {
                    console.error({error})
                })
                //error message here, not console
        }

        return (
            <div>
                <h2>Add New Route</h2>
        <section className='add-new-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='new-route-name'>Course Name</label>
                <input type="text"
                id='new-route-name'
                name='new-route-name' />
                <br />
                <select className="filter" size="1">
                    <option name="dc_area" id="dc_area">DC Area:</option>
                    <option name="dc_area" id="dc_area" value="Northeast">Northeast</option>
                    <option name="dc_area" id="dc_area" value="Southeast">Southeast</option>
                    <option name="dc_area" id="dc_area" value="Northwest">Northwest</option>
                    <option name="dc_area" id="dc_area" value="Southwest">Southwest</option>
                </select>
                <br />
                <select className="filter" size="1">
                    <option name="difficulty" id="difficulty">Difficulty:</option>
                    <option name="difficulty" id="difficulty" value="Low">Low</option>
                    <option name="difficulty" id="difficulty" value="Medium">Medium</option>
                    <option name="difficulty" id="difficulty" value="High">High</option>
                </select>
                <br />
                <select className="filter" size="1">
                    <option name="type" id="type">Type:</option>
                    <option name="type" id="type" value="City Streets">City Streets</option>
                    <option name="type" id="type" value="Residential">Residential</option>
                    <option name="type" id="type" value="Trail/Path">Trail/Path</option>
                </select>
                <br />
                <label htmlFor="new-route-distance">Distance</label>
                <input type="text"
                id='new-route-distance'
                name='new-route-distance' />
                <br />
                <label htmlFor="">Description</label>
                <textarea type="text"
                id='new-route-description'
                name='new-route-description'></textarea>
                <br />
                <button className='buttons'>Submit</button>
                <button onClick={this.handleClickCancel} className='buttons'>Cancel</button>
            </form>
        </section>
            </div>
        )
    }
}

export default AddNew
