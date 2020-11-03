import React, { Component } from 'react'
import Account from './../../components/admin/account';
import * as action from '../../actions/admin';
import { connect } from 'react-redux';
 class admin extends Component {
    render() {
        var {UserAdmin}=this.props;
        return (
            <Account
                UserAdmin={UserAdmin}
            />
        )

    }
    componentDidMount(){
        this.props.Get_Admin();
    }
}
const mapStateToProps=(state)=>{
    return {
        UserAdmin:state.UserAdmin
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        Get_Admin:()=>{
            dispatch(action.GetAdmin());
        }
    }
}
export default 
(connect(mapStateToProps,dispatchToProps))
(admin);