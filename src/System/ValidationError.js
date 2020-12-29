import React from 'react'

function ValidationError(props) {
    if (props.message) {
        return (
        <div>
            <div>{props.message}</div>
        </div>
    )
    }
    return <></>
}

export default ValidationError