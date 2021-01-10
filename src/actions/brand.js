import * as brandType from './../conStants/brand';
import * as Message from './../conStants/Message';
import {db} from '../config/config';


export const ALL=(brand)=>{
    return{
        type:brandType.ALL_BRAND,
        brand
    }
}
export const BrandAllFirebase=()=>{
    return (dispatch,getState,{getFirebase})=>{
        // var brands=[];
        db.collection("brand").where('brandName','>=','a').get().then(
            (res)=>{
                res.forEach((data)=>{

                })
                // dispatch(GET_BRAND_ALL(brands));
            }
        ).catch(
            (res)=>{
                console.log(res);
            }
        )
    }
}
export const GET_BRAND_ALL=(brands)=>{
    return {
        type:brandType.GET_BRAND_ALL,
        brands
    }
}

// add
export const AddBrandRequest=(brand={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        // var brandId=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const {brandName=''}=brand;
        firebase.collection("brand").add({
            brandName:brandName,
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
        const id=brand.id;
        firebase.collection("brand").doc(id).delete().then(()=>{
            dispatch(deleteBrand(id));
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
        const id=brand.brandId;
        dispatch(Brand_Update_request());
        firebase.collection("brand").doc(id).set({
            brandId:id,
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