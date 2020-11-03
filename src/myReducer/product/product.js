import * as productType from '../../conStants/product';
var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case productType.ALL_PRODUCT:
            state.join(actions.product);
        return [...state];

        case productType.ADD_PRODUCT:
        return [...state];

        case productType.DELETE_PRODUCT:
        return [...state];

        case productType.UPDATE_PRODUCT:
        return [...state];
        
        default:return [...state];
    }
}
export default myReducer;