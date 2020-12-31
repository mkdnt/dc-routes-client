import React, { Component } from 'react'
import RouteContext from './RouteContext'
import Route from './Route'
import api from '../System/config'
import PropTypes from 'prop-types'
import ValidationError from '../System/ValidationError'

export class RouteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            route_name: {
                value: '',
                touched: false
            },
            dc_area: {
                value: '',
                touched: false
            },
            distance: {
                value: 0,
                touched: false
            },
            difficulty: {
                value: '',
                touched: false
            },
            route_type: {
                value: '',
                touched: false
            },
            route_description: {
                value: '',
                touched: false
            },
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

    

    handleEdit = () => {
            this.setState({
                editing: true
            })
        }

    handleClickCancel = () => {
        this.props.history.push(`/route/byid/${this.props.match.params.routeId}`)
    }

    handleBack = () => {
        this.props.history.push('/route')
    }

    updateRouteName(name) {
        this.setState({route_name: {value: name, touched: true}})
    }

    validateRouteName(){
        const name = this.state.route_name.value.trim();
        if (name.length === 0) {
            return 'Route Name is required';
        } else if (name.length < 3) {
            return 'Route Name must be at least 3 characters long';
        }
    }

    updateDcArea(area) {
        this.setState({dc_area: {value: area, touched: true}})
    }

    validateDcArea(){
        const dc_area = this.state.dc_area.value.trim();
        if (dc_area.length === 0) {
            return 'DC Area is required';
        }
    }

    updateDistance(distance) {
        this.setState({distance: {value: distance, touched: true}})
    }

    validateDistance(){
        const distance = this.state.distance.value;
        if (distance === 0 || NaN) {
            return 'Distance is required, and must be a number greater than 0';
        }
    }

    updateDifficulty(difficulty) {
        this.setState({difficulty: {value: difficulty, touched: true}})
    }

    validateDifficulty(){
        const difficulty = this.state.difficulty.value.trim();
        if (difficulty.length === 0) {
            return 'Difficulty is required';
        }
    }

    updateRouteType(type) {
        this.setState({route_type: {value: type, touched: true}})
    }

    validateRouteType(){
        const type = this.state.route_type.value.trim();
        if (type.length === 0) {
            return 'Route Type is required';
        }
    }

    updateRouteDescription(description) {
        this.setState({route_description: {value: description, touched: true}})
    }

    validateRouteDescription(){
        const description = this.state.route_description.value.trim();
        if (description.length === 0) {
            return 'Route Description is required';
        } else if (description.length < 10) {
            return 'Route Description must be at least 10 characters long';
        }
    }

    render() {
        const routeNameError = this.validateRouteName();
        const dcAreaError = this.validateDcArea();
        const distanceError = this.validateDistance();
        const difficultyError = this.validateDifficulty();
        const routeTypeError = this.validateRouteType();
        const routeDescriptionError = this.validateRouteDescription();

        const { routes } = this.context
        const { routeId } = this.props.match.params
        const route = routes.find(route => route.id === Number(routeId))

        if (!route) {
            return (
                <div>
                    <p>Error.</p>
                </div>
            )
        }

        const handleClickDelete = event => {
            event.preventDefault();
            const {routeId} = this.props.match.params

            fetch(`${api.API_ENDPOINT}/route/byid/${routeId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${api.API_KEY}`
                },
            })
            // .then(res => {
            //     if (!res.ok)
            //         return res.json().then(e => Promise.reject(e))
            //     return res.json()    
                
            // })
            .then(() => {
                this.props.history.push(`/route`)
                this.context.deleteRoute(routeId)
                
            })
            .catch(error => {
                console.error({error})
            })
        }
        
        const handleSubmit = event => {
            event.preventDefault();
            const editedRoute = {
                id: route.id,
                route_name: event.target['new-route-name'].value,
                dc_area: event.target['dc_area'].value,
                distance: event.target['new-route-distance'].value,
                difficulty: event.target['difficulty'].value,
                route_type: event.target['type'].value,
                route_description: event.target['new-route-description'].value
            }

            fetch(`${api.API_ENDPOINT}/route/byid/${routeId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${api.API_KEY}`
                },
                body: JSON.stringify(editedRoute)
            })
            // .then(res => {
            //     if (!res.ok)
            //         return res.json().then(e => Promise.reject(e))
            // })
            .then(() => {
                this.context.editRoute(editedRoute)
                this.setState({editing: false})               
            })
            .catch(error => {
                console.error({error})
            })
        }

        if (this.state.editing === false) {
            return (
            
            <div className='route-card'>
                <Route 
                    id={route.id}
                    name={route.route_name}
                    area={route.dc_area}
                    distance={route.distance}
                    difficulty={route.difficulty}
                    type={route.route_type}
                    description={route.route_description}
                />
                <button className='buttons' onClick={this.handleEdit}>Edit</button>
                <button className='buttons' type='button' onClick={handleClickDelete}>Delete</button>
                <button className='buttons' onClick={this.handleBack}>Back</button>
            </div>
        )
        }
        
        else {
            return (
                <div>
                <h2>Edit {route.route_name} Route</h2>
        <section className='add-new-form'>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor='new-route-name'>Route Name</label>
                <input type="text"
                id='new-route-name'
                name='new-route-name'
                defaultValue={route.route_name}
                onChange={e=> this.updateRouteName(e.target.value)} />
                {this.state.route_name.touched && <ValidationError message={routeNameError}/>}
                
                <hr style={{width: '75%', border: ' 1px solid #011328', backgroundColor: '#011328' }}/>
                
                <select name="dc_area" id="dc_area" defaultValue={route.dc_area} onChange={e=> this.updateDcArea(e.target.value)}>
                    <option value={null}>DC Area:</option>
                    <option value="Northeast">Northeast</option>
                    <option value="Southeast">Southeast</option>
                    <option value="Northwest">Northwest</option>
                    <option value="Southwest">Southwest</option>
                </select>
                {this.state.dc_area.touched && <ValidationError message={dcAreaError}/>}
                
                
                <select name="difficulty" id="difficulty" defaultValue={route.difficulty} onChange={e=> this.updateDifficulty(e.target.value)}>
                    <option value={null}>Difficulty:</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                {this.state.difficulty.touched && <ValidationError message={difficultyError}/>}
                
                
                
                <select name="type" id="type" defaultValue={route.route_type} onChange={e=> this.updateRouteType(e.target.value)}>
                    <option value={null}>Type:</option>
                    <option value="City Streets">City Streets</option>
                    <option value="Residential">Residential</option>
                    <option value="Trail/Path">Trail/Path</option>
                </select>
                {this.state.route_type.touched && <ValidationError message={routeTypeError}/>}
                
                <hr style={{width: '75%', border: ' 1px solid #011328', backgroundColor: '#011328' }}/>
                
                <label htmlFor="new-route-distance">Distance (miles)</label>
                <input style={{width: '30px'}}type="text"
                id='new-route-distance'
                name='new-route-distance' 
                defaultValue={route.distance}
                onChange={e=> this.updateDistance(e.target.value)}/>
                {this.state.distance.touched && <ValidationError message={distanceError}/>}
                
                <hr style={{width: '75%', border: ' 1px solid #011328', backgroundColor: '#011328' }}/>
                
                <label htmlFor="">Description</label>
                <textarea type="text"
                id='new-route-description'
                name='new-route-description'
                defaultValue={route.route_description}
                onChange={e=> this.updateRouteDescription(e.target.value)}></textarea>
                {this.state.route_description.touched && <ValidationError message={routeDescriptionError}/>}
                
                <br />
                <button className='buttons'>Submit</button>
                <button className='buttons' onClick={this.handleClickCancel} className='buttons'>Cancel</button>
            </form>
        </section>
            </div>
            )
        }
    }
}

export default RouteItem
