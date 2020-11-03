import * as typeCategory from '../../conStants/category';
var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case typeCategory.ALL_CATEGORY:
        return [...state];

        case typeCategory.ADD_CATEGORY:
        return [...state];

        case typeCategory.DELETE_CATEGORY:
        return [...state];

        case typeCategory.UPDATE_CATEGORY:
        return [...state];
        default :return [...state];
    }
}
export default myReducer;