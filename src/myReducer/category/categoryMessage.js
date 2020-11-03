import * as types from  '../../conStants/Message';

var initialState={
    Category_Add_Success:false,
    Category_Add_Request:false,
    Category_Add_Error:false,
    Category_Delete_Success:false,
    Category_Delete_Request:false,
    Category_Delete_Error:false,
    Category_Update_Success:false,
    Category_Update_Request:false,
    Category_Update_Error:false,
}
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){

        case types.Category_Add_Request:
            state={
            Category_Add_Success:false,
            Category_Add_Request:true,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Add_Success:
            state={
            Category_Add_Success:true,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Add_Error:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:true,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Delete_Request:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:true,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Delete_Success:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:true,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Delete_Error:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:true,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Update_Request:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:true,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Update_Success:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:true,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        case types.Category_Update_Error:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:true
            }
            return state;
        case types.Category_Reset:
            state={
            Category_Add_Success:false,
            Category_Add_Request:false,
            Category_Add_Error:false,
            Category_Delete_Success:false,
            Category_Delete_Request:false,
            Category_Delete_Error:false,
            Category_Update_Success:false,
            Category_Update_Request:false,
            Category_Update_Error:false
            }
            return state;
        default : return state;
    }
}
export default myReducer;