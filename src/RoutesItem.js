import React from 'react'

function RoutesItem(props){
        return (
            <div>
                <h4>{props.route.route_name}</h4>
                <h5>{props.route.dc_area}</h5>
                <h5>{props.route.distance} miles</h5>
                <h5>Difficulty: {props.route.difficulty}</h5>
                <h5>Type: {props.route.route_type}</h5>
                <p>{props.route.route_description}</p>
                <br />
            </div>
        )
}

export default RoutesItem
