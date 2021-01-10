import * as UserType from '../../conStants/admin';
var initialState='';
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case UserType.GET_ACCOUNT_ADMIN:
            
            state=actions.admin;
            return state;
        default: return state;
    } 
}
export default myReducer;