import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../actions/admin';
import Login from './../../components/admin/login/login';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
class login extends Component {
    constructor(props) {
        super(props);
        this.state={
            Redirect:false,
            displayName:''
        }
    }
    render() {
        document.title='Login admin ';
        var {AdminMessage}=this.props;
        if(AdminMessage.Login_Admin_Success){
            setTimeout(() => {
                window.location.reload();
            }, 1400);

            setTimeout(() => {
                return <>
                <Redirect to="/" />
                </>
            }, 2000);
        }
        if(AdminMessage.Logout_Admin_Success){
            toast.dark('Đăng Xuất Thành Công !')
        }
        if(AdminMessage.Login_Admin_Error){
            toast.warning('Đăng Nhập Thất Bại !')
        }
        return (
            <>
            <Dialog open={AdminMessage.Login_Admin_In}>
                <DialogContent>
                    <CircularProgress aria-labelledby="simple-dialog-title" />
                </DialogContent>
            </Dialog>
            <Login
                loginAdmin={this.loginAdmin}
                AdminMessage={AdminMessage}
            />
            </>
        )
    }
    loginAdmin=(user)=>{
        this.props.login(user);
    }
    componentDidMount(){
        document.title="Login dashboard admin ...";
        this.props.GetAdmin();
        var user=JSON.parse(localStorage.getItem('userAdmin'));
        if(user){
            if(user.displayName){
                this.setState({
                    displayName:user.displayName
                });
                return <Redirect to="/" />
             }
            }
    }
}
const mapStateToProps=(state)=>{
    return{
        AdminMessage:state.AdminMessage,
        UserAdmin:state.UserAdmin
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        login:(user)=>{
            dispatch(actions.LOGIN_ADMIN_REQUEST(user));
        },
        GetAdmin:()=>{
            dispatch(actions.GetAdmin());
        }
    }
}
export default
connect(mapStateToProps,dispatchToProps)
(login)