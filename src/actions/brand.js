import * as brandType from './../conStants/brand';
import * as Message from './../conStants/Message';

export const ALL=(brand)=>{
    return{
        type:brandType.ALL_BRAND,
        brand
    }
}




// add
export const AddBrandRequest=(brand={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        dispatch(Brand_request());
        const {brandName=''}=brand;
        firebase.collection("brand").add({
            brandName:brandName
        }).then(()=>{
            dispatch(addBrand(brand));
            dispatch(Brand_Success());
        }).catch(()=>{
            dispatch(Brand_Error());
        });
    }
}
export const addBrand=(brand)=>{
    return{
        type:brandType.ADD_BRAND,
        brand
    }
}
export const Brand_request=()=>{
    return {
        type:Message.Brand_Request
    }
}

export const Brand_Success=()=>{
    return {
        type:Message.Brand_Success
    }
}

export const Brand_Error=()=>{
    return {
        type:Message.Brand_Error
    }
}




export const DeleteBrandRequest=(brand={})=>{
    return (dispatch ,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        dispatch(Brand_Delete_request());
        const brandId=brand.id;
        firebase.collection("brand").doc(brandId).delete().then(()=>{
            dispatch(deleteBrand(brandId));
            dispatch(Brand_Delete_Success());
        }).catch(()=>{
            dispatch(Brand_Delete_Error());
        })
    }
}
export const deleteBrand=(brand)=>{
    return{
        type:brandType.DELETE_BRAND,
        brand
    }
}

export const Brand_Delete_request=()=>{
    return {
        type:Message.Brand_Delete_Request
    }
}

export const Brand_Delete_Success=()=>{
    return {
        type:Message.Brand_Delete_Success
    }
}

export const Brand_Delete_Error=()=>{
    return {
        type:Message.Brand_Delete_Error
    }
}






// update
export const UpdateBrandRequest=(brand={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        const brandId=brand.brandId;
        dispatch(Brand_Update_request());
        firebase.collection("brand").doc(brandId).set({
            brandId,
            brandName:brand.brandName
        }).then(()=>{
            dispatch(updateBrand(brand));
            dispatch(Brand_Update_Success());
        }).catch(()=>{
            dispatch(Brand_Update_Error());
        })
    }
}
export const updateBrand=(brand)=>{
    return{
        type:brandType.UPDATE_BRAND,
        brand
    }
}

export const Brand_Update_request=()=>{
    return {
        type:Message.Brand_Update_Request
    }
}

export const Brand_Update_Success=()=>{
    return {
        type:Message.Brand_Update_Success
    }
}

export const Brand_Update_Error=()=>{
    return {
        type:Message.Brand_Update_Error
    }
}



// reset
export const ResetMessage=()=>{
    return{
        type:Message.Brand_Reset
    }
}