import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                    <h1>dc_routes</h1>
                </Link>
            </div>
        )
    }
}

export default Header
