import * as typeBrand from '../../conStants/brand';
var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case typeBrand.ALL_BRAND:
            return [...state];
        case typeBrand.ADD_BRAND:

            return [...state];
        case typeBrand.DELETE_BRAND:

            return [...state];
        case typeBrand.UPDATE_BRAND:
            
            return [...state];
            
        default:return [...state];
    }
}
export default myReducer;