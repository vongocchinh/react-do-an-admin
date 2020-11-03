import React, { Component } from 'react'
import RegisterForm from './registerForm';

export default class register extends Component {
    render() {
        return (
            <div className="container-login">
                <div className="login-form-1">
                <h3>Register for Admin</h3>
                    <RegisterForm 
                        register={this.props.register}
                    />
                </div>
            </div>
        )
    }
}
