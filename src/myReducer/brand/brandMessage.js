import * as type from './../../conStants/Message';
var initialState={
    Brand_Success:false,
    Brand_Error:false,
    Brand_Request:false,
    Brand_Delete_Success:false,
    Brand_Delete_Error:false,
    Brand_Delete_Request:false,
    Brand_Update_Success:false,
    Brand_Update_Error:false,
    Brand_Update_Request:false
}
var myReducer =(state=initialState,actions)=>{
    switch(actions.type){
        case type.Brand_Request:
            state={
                Brand_Request:true,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Error:
            state={
                Brand_Request:false,
                Brand_Error:true,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Success:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:true,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Delete_Success:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:true,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Delete_Request:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:true,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Delete_Error:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:true,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Update_Request:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:true
            }
            return state;
        case type.Brand_Update_Success:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:true,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Update_Error:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:true,
                Brand_Update_Request:false
            }
            return state;
        case type.Brand_Reset:
            state={
                Brand_Request:false,
                Brand_Error:false,
                Brand_Success:false,
                Brand_Delete_Success:false,
                Brand_Delete_Error:false,
                Brand_Delete_Request:false,
                Brand_Update_Success:false,
                Brand_Update_Error:false,
                Brand_Update_Request:false
            }
            return state;
        
        default :return state;
        }
}
export default myReducer;