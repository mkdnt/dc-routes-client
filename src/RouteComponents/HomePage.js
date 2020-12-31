import React, { Component } from 'react'

export class HomePage extends Component {
    handleStart = () => {
        this.props.history.push('/route')
    }

    render() {
        return (
            <div>
                <h2>let's go!</h2>
                    <p>This app offers various running routes in the Washington, DC, area. Choose which part of DC you want to run in, how far you want to run, or what type of route you want to run.</p>
                    <p>You can also add your own routes to the list to help expand our database of DC running routes. Feel free to edit your routes if something changes about them or if additional information is necessary.</p>
                    <p>Click below to see the full list of routes!</p>
                    <button className='buttons'onClick={this.handleStart}>Get Started</button>            
            </div>
        )
    }
}

export default HomePage
