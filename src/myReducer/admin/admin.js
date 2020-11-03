import * as types  from '../../conStants/admin';
// var user=JSON.parse(localStorage.getItem('admin'));
var initialState={
    Login_Admin_In:false,
    Login_Admin_Success:false,
    Login_Admin_Error:false,
    Logout_Admin_In:false,
    Logout_Admin_Success:false,
    Logout_Admin_Error:false
};
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case types.LOGIN_ADMIN:
            return state;
        case types.ADD_ADMIN:
            return state;
        case types.LOGIN_ADMIN_IN:
            state={
                Login_Admin_In:true,
                Login_Admin_Success:false,
                Login_Admin_Error:false,
                Logout_Admin_In:false,
                Logout_Admin_Success:false,
                Logout_Admin_Error:false
            }
        return state;
        case types.LOGIN_ADMIN_SUCCESS:
            state={
                Login_Admin_In:false,
                Login_Admin_Success:true,
                Login_Admin_Error:false,
                Logout_Admin_In:false,
                Logout_Admin_Success:false,
                Logout_Admin_Error:false
            }
        return state;
        case types.LOGIN_ADMIN_ERROR:
            state={
                Login_Admin_In:false,
                Login_Admin_Success:false,
                Login_Admin_Error:true,
                Logout_Admin_In:false,
                Logout_Admin_Success:false,
                Logout_Admin_Error:false
            }
        return state;
        case types.LOGOUT_ADMIN_IN:
            state={
                Login_Admin_In:false,
                Login_Admin_Success:false,
                Login_Admin_Error:false,
                Logout_Admin_In:true,
                Logout_Admin_Success:false,
                Logout_Admin_Error:false
            }
        return state;
        case types.LOGOUT_ADMIN_SUCCESS:
            state={
                Login_Admin_In:false,
                Login_Admin_Success:false,
                Login_Admin_Error:false,
                Logout_Admin_In:false,
                Logout_Admin_Success:true,
                Logout_Admin_Error:false
            }
        return state;
        case types.LOGOUT_ADMIN_ERROR:
            state={
                Login_Admin_In:false,
                Login_Admin_Success:false,
                Login_Admin_Error:false,
                Logout_Admin_In:false,
                Logout_Admin_Success:false,
                Logout_Admin_Error:true
            }
        return state;
        default :return state;
    }

}
export default myReducer;