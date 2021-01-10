import React, { Component } from 'react'
import LoginForm from './loginForm';
 class login extends Component {
    render() {
        return (
                <div className="login-form-admin">
                    <div className="login-form-container-admin">
                        <h2 className="title-login-h2">Login Admin</h2>
                        <LoginForm loginAdmin={this.props.loginAdmin}
                            AdminMessage={this.props.AdminMessage}
                        />
                    </div>
                </div>
        )
    }
}
export default login;