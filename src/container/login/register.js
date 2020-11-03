import React, { Component } from 'react'
import Register from './../../components/admin/register/register';
import { connect } from 'react-redux';
import * as actions from './../../actions/admin';
class register extends Component {
    render() {
        return (
            <Register 
                register={this.register}
            />
        )
    }
    register=(user)=>{
        this.props.register(user);
    }
}

const mapStateToProps=(state)=>{
    return{
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        register:(user)=>{
            dispatch(actions.REGISTER_ADMIN_REQUEST(user));
        }
    }
}
export default 
connect(mapStateToProps,dispatchToProps)(register);