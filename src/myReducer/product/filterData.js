import * as productType from '../../conStants/product';
var initialState={
    name:'',
    status:1
};
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case productType.FILTER_DATA:
            state={
                name:actions.filter.filter,
                status:1
            }
        return state;

        default:return state;
    }
}
export default myReducer;