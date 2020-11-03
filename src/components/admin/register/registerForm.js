import React, { Component } from 'react'

export default class registerForm extends Component {
    constructor(props) {
       super(props);
       this.state={
           userEmail:"",
           passWord:''
       } 
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {userEmail,passWord}=this.state;
        const user={
            userEmail,
            passWord
        }
        this.props.register(user);
        e.target.reset();
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input onChange={this.onChange} name="userEmail" type="email" className="form-control form-control-focus" placeholder="Your Email *"  />
            </div>
            <div className="form-group">
              <input onChange={this.onChange} name="passWord" minLength={6} type="password" className="form-control  form-control-focus" placeholder="Your Password *"  />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" defaultValue="Login" />
            </div>
            <div className="form-group">
              <a href="###" className="ForgetPwd">Forget Password?</a>
              <a href="register.html" className="ForgetPwd">Register ?</a>
            </div>
          </form>
        )
    }
}
