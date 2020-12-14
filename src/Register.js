import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
        <section className='registration-form'>
            <h2>Register</h2>
            <form>
                <label for="">username</label>
                <input type="text" />
                <br />
                <label for="">email</label>
                <input type="text" />
                <br />
                <label for="">password</label>
                <input type="text" />
                <br />
                <label for="">retype password</label>
                <input type="text" />
                <br />
                <button className='buttons'>Enter</button>
                <button className='buttons'>Cancel</button>
            </form>
        </section>
        )
    }
}

export default Register
