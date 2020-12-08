import * as typeBrand from '../../conStants/brand';
var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case typeBrand.GET_BRAND_ALL:
           state=actions.brands;
            return state;
        default:return [...state];
    }
}
export default myReducer;