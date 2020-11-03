import * as UserType from '../../conStants/admin';
var initialState='';
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case UserType.admin_Get:
            var UserData=JSON.parse(localStorage.getItem('userAdmin'));
            state=UserData;
            return state;
        default: return state;
    } 
}
export default myReducer;