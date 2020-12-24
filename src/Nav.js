import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            <ul>
                <Link 
                    to='/route' 
                    style={{textDecoration: 'none', color: 'inherit'}}>
                    <li>_routes</li>
                </Link>

                <Link 
                    to='/addNew' 
                    style={{textDecoration: 'none', color: 'inherit'}}>
                    <li>_add</li>
                </Link>

                <Link 
                    to='/help' 
                    style={{textDecoration: 'none', color: 'inherit'}}>
                    <li>_help</li>
                </Link>

            </ul>
        )
    }
}

export default Nav
