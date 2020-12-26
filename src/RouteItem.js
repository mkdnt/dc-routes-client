import React, { Component } from 'react'
import RouteContext from './RouteContext'
import Route from './Route'
import config from './config'
import PropTypes from 'prop-types'

export class RouteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static propTypes = {
        onClick: PropTypes.func,
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

    handleClickDelete = event => {
            event.preventDefault();
            const {routeId} = this.props.match.params

            fetch(`${config.API_ENDPOINT}/route/byid/${routeId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()    
                
            })
            .then((routeId) => {
                this.context.deleteRoute(routeId)
                this.props.history.push('/route')
            })
            .catch(error => {
                console.error({error})
            })
        }

    handleEdit = () => {
            this.setState({editing: true})
        }

        handleClickCancel = () => {
            this.props.history.push(`/route`)
        }

    render() {
        console.log('inside RouteItem component')
        const { routes } = this.context
        const { routeId } = this.props.match.params
        const route = routes.find(route => route.id === Number(routeId))
        

        const handleSubmit = event => {
            event.preventDefault();
            const editedRoute = {
                route_name: event.target['new-route-name'].value,
                dc_area: event.target['dc_area'].value,
                distance: event.target['new-route-distance'].value,
                difficulty: event.target['difficulty'].value,
                route_type: event.target['type'].value,
                route_description: event.target['new-route-description'].value
            }

            fetch(`${config.API_ENDPOINT}/route/byid/${routeId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(editedRoute)
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then((route) => {
                this.context.editRoute(route)
                this.props.history.push(`/route`)
            })
            .catch(error => {
                console.error({error})
            })
        }

        if (this.state.editing === false) {
            return (
            
            <div>
                <Route 
                    id={route.id}
                    name={route.route_name}
                    area={route.dc_area}
                    distance={route.distance}
                    difficulty={route.difficulty}
                    type={route.route_type}
                    description={route.route_description}
                />
                <button onClick={this.handleEdit}>Edit</button>
                <button type='button' onClick={this.handleClickDelete}>Delete</button>
            </div>
        )
        }
        
        else {
            return (
                <div>
                <h2>Edit {route.route_name} Route</h2>
        <section className='add-new-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='new-route-name'>Course Name</label>
                <input type="text"
                id='new-route-name'
                name='new-route-name'
                placeholder={route.route_name} />
                <br />
                <select name="dc_area" id="dc_area">
                    <option value={route.dc_area}>{route.dc_area}</option>
                    <option value="Northeast">Northeast</option>
                    <option value="Southeast">Southeast</option>
                    <option value="Northwest">Northwest</option>
                    <option value="Southwest">Southwest</option>
                </select>
                <br />
                <select name="difficulty" id="difficulty">
                    <option value={route.difficulty}>{route.difficulty}</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <br />
                <select name="type" id="type">
                    <option value={route.route_type}>{route.route_type}</option>
                    <option value="City Streets">City Streets</option>
                    <option value="Residential">Residential</option>
                    <option value="Trail/Path">Trail/Path</option>
                </select>
                <br />
                <label htmlFor="new-route-distance">Distance</label>
                <input type="text"
                id='new-route-distance'
                name='new-route-distance'
                placeholder={route.distance} />
                <br />
                <label htmlFor="">Description</label>
                <textarea type="text"
                id='new-route-description'
                name='new-route-description'
                >{route.route_description}</textarea>
                <br />
                <button className='buttons'>Submit</button>
                <button onClick={this.handleClickCancel} className='buttons'>Cancel</button>
            </form>
        </section>
            </div>
            )
        }
    }
}

export default RouteItem
