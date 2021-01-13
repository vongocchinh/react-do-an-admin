import * as productType from '../../conStants/product';
var initialState={
    DELETE_REVIEW_IN:false,
    DELETE_REVIEW_SUCCESS:false,
    DELETE_REVIEW_ERR:false
};
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case productType.DELETE_REVIEW_IN:
            state={
                DELETE_REVIEW_IN:true,
                DELETE_REVIEW_SUCCESS:false,
                DELETE_REVIEW_ERR:false,
            }
        return state;
        case productType.DELETE_REVIEW_SUCCESS:
            state={
                DELETE_REVIEW_IN:false,
                DELETE_REVIEW_SUCCESS:true,
                DELETE_REVIEW_ERR:false,
            }
        return state;
        case productType.DELETE_REVIEW_ERR:
            state={
                DELETE_REVIEW_IN:false,
                DELETE_REVIEW_SUCCESS:false,
                DELETE_REVIEW_ERR:true,
            }
        return state;
        case productType.RESET_REVIEW:
            state={
                DELETE_REVIEW_IN:false,
                DELETE_REVIEW_SUCCESS:false,
                DELETE_REVIEW_ERR:false,
            }
        return state;
        default:return state;
    }
}
export default myReducer;