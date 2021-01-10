import React, { Component } from 'react'
import Account from '../../components/admin/account/account';
import * as action from '../../actions/admin';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
import AccountAdmin from './../../components/admin/account/accountAdmin';
 class admin extends Component {
    render() {
        var {UserAdmin,AdminMessage}=this.props;
        // console.log(UserAdmin);
        if(AdminMessage.UPDATE_ADMIN_SUCCESS){
            toast.dark("Chinh Sửa Thành Công .");
            window.location.reload();
        }
        if(AdminMessage.UPDATE_ADMIN_ERO){
            toast.dark("Chinh Sửa Thất Bại .");
        }
        return (
            <>
                <Dialog open={AdminMessage.UPDATE_ADMIN_IN}>
                    <DialogContent>
                        <CircularProgress aria-labelledby="simple-dialog-title" />
                    </DialogContent>
                </Dialog>
                <AccountAdmin
                    showAccount={this.showAccount(UserAdmin)}
                />
            </>
        )

    }
    showAccount=(accounts)=>{
        return <Account 
                UserAdmin={accounts}
                updateAdmin={this.updateAdmin}
                updateImagesAdmin={this.updateImagesAdmin}
            />
    }
    updateAdmin=(adminUser)=>{
        this.props.updateAdmin(adminUser);
    }
    updateImagesAdmin=(adminUser)=>{
        this.props.updateImagesAdmin(adminUser);
    }
    componentDidMount(){
        document.title="Quản lý tài khoản admin ..."
        this.props.Get_Admin();
        this.props.GetAccountAdmin();
    }
}
const mapStateToProps=(state)=>{
    return {
        UserAdmin:state.UserAdmin,
        AdminMessage:state.AdminMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        Get_Admin:()=>{
            dispatch(action.GetAdmin());
        },
        updateAdmin:(adminUser)=>{
            dispatch(action.UpdateAdminRequest(adminUser));
        },
        GetAccountAdmin:()=>{
            dispatch(action.GetAccountAdmin());
        },
        updateImagesAdmin:(adminUser)=>{
            dispatch(action.UPDATE_IMAGES_ADMIN(adminUser));
        }
    }
}
export default 
(connect(mapStateToProps,dispatchToProps))
(admin);