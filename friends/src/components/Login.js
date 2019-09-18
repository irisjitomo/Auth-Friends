import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';


class Login extends React.Component  {
    state ={
        credentials : {
            username : '',
            password : ''
        }
    }

    handleChange= event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name] : event.target.value

            }
        })
    }

    // handleChangespassword = event => {
    //     setpassword(event.target.value)
    // }

    submitLogin = event => {
        event.preventDefault();
        console.log(this.state.credentials)
        axiosWithAuth()
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);    
            this.props.history.push('/protected');
            console.log(res)
        })
        .catch(err => console.log(err));
    }
    render () {
    return (
        <div>
            <form onSubmit={this.submitLogin}>
                <input
                name='username' 
                placeholder='username'
                value={this.state.credentials.username}
                onChange={this.handleChange}/>

                <input 
                name='password'
                placeholder='password'
                value={this.state.credentials.password}
                onChange={this.handleChange}/>
                <button>Login</button>
            </form>
        </div>
    )
}
}

export default Login