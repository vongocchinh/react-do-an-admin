import * as types from './../../conStants/bill';
var initialState={
    Update_Quantity_Request:false,
    Update_Quantity_Success:false,
    Update_Quantity_Error:false,
}
var myReducer=(state=initialState,actions)=>{
    switch (actions.type){
        case types.BILL_UPDATE_REQUEST:
            state={
                Update_Quantity_Request:true,
                Update_Quantity_Success:false,
                Update_Quantity_Error:false,
            }
            return state;
        case types.BILL_UPDATE_SUCCESS:
            state={
                Update_Quantity_Request:false,
                Update_Quantity_Success:true,
                Update_Quantity_Error:false,
            }
            return state;
        case types.BILL_UPDATE_ERROR:
            state={
                Update_Quantity_Request:false,
                Update_Quantity_Success:false,
                Update_Quantity_Error:true,
            }
            return state;
        case types.Reset_Update_Bill:
            state={
                Update_Quantity_Request:false,
                Update_Quantity_Success:false,
                Update_Quantity_Error:false,
            }
            return state;
        default: return state;
    }
}
export default myReducer;