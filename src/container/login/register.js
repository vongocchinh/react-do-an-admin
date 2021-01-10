import React, { Component } from 'react'
import Register from './../../components/admin/register/register';
import { connect } from 'react-redux';
import * as actions from './../../actions/admin';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
// var userAdminLocalStorage=JSON.parse(localStorage.getItem('userAdmin'));
class register extends Component {
    render() {
        var {RegisterStore,Registers,UserAdmin}=this.props;
        if(UserAdmin.levelAdmin>0){
            return <Redirect to="/" />
        }
        if(Registers.REGISTER_ADMIN_SUCCESS){
            toast.dark("Đăng kí thành công .");
            setTimeout(() => {
                this.props.resetRegisterAdmin();
            }, 1);
        }
        return (
            <>  
                <Dialog open={RegisterStore.REGISTER_ADMIN_IN}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>
                <Register 
                register={this.register}
            />
            </>
        )
    }
    register=(user)=>{
        this.props.register(user);
       
    }
    componentDidMount(){
        document.title="Đăng kí account admin ";
        this.props.GetAccountAdmin();
    }
}

const mapStateToProps=(state)=>{
    return{
        RegisterStore:state.Register,
        Registers:state.Register,
        UserAdmin:state.UserAdmin
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        register:(user)=>{
            dispatch(actions.REGISTER_ADMIN_REQUEST(user));
        },
        resetRegisterAdmin:()=>{
            dispatch(actions.resetRegisterAdmin());
        },
        GetAccountAdmin:()=>{
            dispatch(actions.GetAccountAdmin());
        }
    }
}
export default 
connect(mapStateToProps,dispatchToProps)(register);