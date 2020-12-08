import * as types  from '../../conStants/admin';
// var user=JSON.parse(localStorage.getItem('admin'));
var initialState={
    REGISTER_ADMIN_IN:false,
    REGISTER_ADMIN_SUCCESS:false,
};
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case types.REGISTER_IN_ADMIN:
            state={
                REGISTER_ADMIN_IN:true,
                REGISTER_ADMIN_SUCCESS:false,
            }
            return state;
        case types.REGISTER_SUCCESS_ADMIN:
            state={
                REGISTER_ADMIN_IN:false,
                REGISTER_ADMIN_SUCCESS:true,
            }
            return state;
        case types.RESET_REGISTER_ADMIN:
            state={
                REGISTER_ADMIN_IN:false,
                REGISTER_ADMIN_SUCCESS:false,
            }
            return state;
        default :return state;
    }

}
export default myReducer;