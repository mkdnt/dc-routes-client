import React, { Component } from 'react'
import RouteContext from './RouteContext'
import Route from './Route'
import config from './config'
import PropTypes from 'prop-types'



export class RouteItem extends Component {
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
            // const routeToDelete = Number(routeId)
            // console.log(routeToDelete)

            fetch(`${config.API_ENDPOINT}/route/byid/${routeId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
            // .then(res => {
            //     if (!res.ok)
            //         return res.json().then(e => Promise.reject(e))
            //     return res.json()    
                
            // })
            .then((routeId) => {
                this.context.deleteRoute(routeId)
                this.props.history.push('/route')
            })
            .catch(error => {
                console.error({error})
            })
        }

    render() {
        console.log('inside RouteItem component')
       const { routes } = this.context
        const { routeId } = this.props.match.params
        const route = routes.find(route => route.id === Number(routeId))

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
                <button>Edit</button>
                <button type='button' onClick={this.handleClickDelete}>Delete</button>
            </div>
        )
    }
}

export default RouteItem
