import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

export class Login extends Component {
    render() {
        return (
            <div>
               <h2>Log In</h2>
            <form>
                <label for="">email</label>
                <input type="text" />
                <br />
                <label for="">password</label>
                <input type="text" />
                <br />
                <button className='buttons'>Enter</button>
                <button className='buttons'>Cancel</button>
            </form>
            <section>
                <p>New users: register <Link to='register'>here</Link>.</p>
            </section>
            </div>
        )
    }
}

export default Login
