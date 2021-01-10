import * as  categoryType from '../conStants/category';
import * as Message from './../conStants/Message';
export const ALL_CATEGORY=(category)=>{
    return{
        type:categoryType.ALL_CATEGORY,
        category
    }
}
// add
export const ADD_CATEGORY_REQUEST=(category={})=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(Category_Add_request());
        var firebase=getFirebase().firestore();
        var {categoryName=''}=category;
        firebase.collection("category").add({
            categoryName
        }).then(()=>{
            dispatch(ADD_CATEGORY(category));
            dispatch(Category_Add_Success());
        }).catch(()=>{
            dispatch(Category_Add_Error());
        });
    }
}
export const ADD_CATEGORY=(category)=>{
    return{
        type:categoryType.ADD_CATEGORY,
        category
    }
}
export const Category_Add_request=()=>{
    return {
        type:Message.Category_Add_Request
    }
}

export const Category_Add_Success=()=>{
    return {
        type:Message.Category_Add_Success
    }
}

export const Category_Add_Error=()=>{
    return {
        type:Message.Category_Add_Error
    }
}



// delete
export const DELETE_CATEGORY_REQUEST=(category)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(Category_Delete_request());
        var firebase=getFirebase().firestore();
        const id=category.id;
        firebase.collection("category").doc(id).delete().then(()=>{
            dispatch(DELETE_CATEGORY(category));
            dispatch(Category_Delete_Success());
        }).catch(()=>{
            dispatch(Category_Delete_Error());
        })
    }
}
export const DELETE_CATEGORY=(category)=>{
    return{
        type:categoryType.DELETE_CATEGORY,
        category
    }
}
export const Category_Delete_request=()=>{
    return {
        type:Message.Category_Delete_Request
    }
}

export const Category_Delete_Success=()=>{
    return {
        type:Message.Category_Delete_Success
    }
}

export const Category_Delete_Error=()=>{
    return {
        type:Message.Category_Delete_Error
    }
}



// update
export const UPDATE_CATEGORY_REQUEST=(category)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(Category_Update_request());
        var firebase=getFirebase().firestore();
        const id=category.categoryId;
        const {categoryName=''}=category;
        firebase.collection("category").doc(id).set({
                categoryID:id,categoryName
        }).then(()=>{
            dispatch(UPDATE_CATEGORY(category));
            dispatch(Category_Update_Success());
        }).catch(()=>{
            dispatch(Category_Update_Error());
        });
    }
}
export const UPDATE_CATEGORY=(category)=>{
    return{
        type:categoryType.UPDATE_CATEGORY,
        category
    }
}
export const Category_Update_request=()=>{
    return {
        type:Message.Category_Update_Request
    }
}

export const Category_Update_Success=()=>{
    return {
        type:Message.Category_Update_Success
    }
}

export const Category_Update_Error=()=>{
    return {
        type:Message.Category_Update_Error
    }
}



// reset
export const ResetMessage=()=>{
    return{
        type:Message.Category_Reset
    }
}