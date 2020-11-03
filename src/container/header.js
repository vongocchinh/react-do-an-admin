import React, { Component } from 'react'
import Header from './../components/layout/Header';
import * as actions from './../actions/admin';
import { connect } from 'react-redux';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
 class header extends Component {
    render() {
        var {AdminMessage}=this.props;
       if(AdminMessage.Logout_Admin_In){

           return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
       }
       if(AdminMessage.Login_Admin_Success){
            toast.success('Đăng Nhập Thành Công !')
       }
        return (
           <>
            <Header
                logout={this.props.logout}
            />
           </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        AdminMessage:state.AdminMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        logout:()=>{
            dispatch(actions.LOGOUT_ADMIN_REQUEST());
        }
    }
}
export default
connect(mapStateToProps,dispatchToProps)(header);