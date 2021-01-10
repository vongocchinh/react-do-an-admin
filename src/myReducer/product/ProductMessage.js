import * as types from  '../../conStants/Message';

var initialState={
    Product_Add_Success:false,
    Product_Add_Request:false,
    Product_Add_Error:false,
    Product_Delete_Success:false,
    Product_Delete_Request:false,
    Product_Delete_Error:false,
    Product_Update_Success:false,
    Product_Update_Request:false,
    Product_Update_Error:false,
    Product_Update_Status_Success:false,
}
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){

        case types.Product_Add_Request:
            state={
                Product_Add_Success:false,
                Product_Add_Request:true,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Add_Success:
            state={
                Product_Add_Success:true,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Add_Error:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:true,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Delete_Request:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:true,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Delete_Success:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:true,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Delete_Error:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:true,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Update_Request:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:true,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Update_Success:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:true,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Update_Error:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:true
            }
            return state;
        case types.Product_Reset:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false
            }
            return state;
        case types.Product_Update_Status_Success:
            state={
                Product_Add_Success:false,
                Product_Add_Request:false,
                Product_Add_Error:false,
                Product_Delete_Success:false,
                Product_Delete_Request:false,
                Product_Delete_Error:false,
                Product_Update_Success:false,
                Product_Update_Request:false,
                Product_Update_Error:false,
                Product_Update_Status_Success:true,
            }
            return state;
        default : return state;
    }
}
export default myReducer;