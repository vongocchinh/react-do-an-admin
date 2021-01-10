import * as types from './../conStants/slides';
import {storage} from './../config/config';
export const Delete_Slides=(Slide)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(Slide_Delete_request());
        var firebase=getFirebase().firestore();
        const id=Slide.id;
        firebase.collection("slides").doc(id).delete().then(()=>{
            dispatch(Slide_Delete_Success());
        }).catch(()=>{
            dispatch(Slide_Delete_Error());
        })
    }
}
export const Slide_Delete_request=()=>{
    return {
        type:types.DELETE_SLIDES_REQUEST
    }
}
export const Slide_Delete_Success=()=>{
    return {
        type:types.DELETE_SLIDES_SUCCESS
    }
}
export const Slide_Delete_Error=()=>{
    return {
        type:types.DELETE_SLIDES_ERROR
    }
}

// on status
export const UPDATE_STATUS_SLIDES=(Slide)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(Slide_UPDATE_STATUS_request());
        var firebase=getFirebase().firestore();
        const id=Slide.id;
        const slidesName=Slide.slidesName;
        const slidesImages=Slide.slidesImages;
        const idProduct=Slide.idProduct;
        var ruleSlides=Slide.ruleSlides;
        firebase.collection("slides").doc(id).set({
            id,
            slidesName,slidesImages,idProduct,ruleSlides:!ruleSlides
        }).then(()=>{
            dispatch(Slide_UPDATE_STATUS_Success());
        }).catch(()=>{
            dispatch(Slide_UPDATE_STATUS_Error());
        })
    }
}
export const Slide_UPDATE_STATUS_request=()=>{
    return {
        type:types.UPDATE_STATUS_SLIDES_REQUEST
    }
}
export const Slide_UPDATE_STATUS_Success=()=>{
    return {
        type:types.UPDATE_STATUS_SLIDES_SUCCESS
    }
}
export const Slide_UPDATE_STATUS_Error=()=>{
    return {
        type:types.UPDATE_STATUS_SLIDES_ERROR
    }
}


// add

export const ADD_SLIDES=(slides)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(Slide_ADD_request());
        var firebase=getFirebase().firestore();

        const {slidesImages}=slides;
        var storages=storage.ref("images/"+(slidesImages.name)).put(slidesImages);

        storages.on('state_changed',
        snapshot=>{},
        error=>{
            console.log(error);
        },
        ()=>{
            storage.ref("images").child(slidesImages.name).getDownloadURL().then((url)=>{
                const slidesName=slides.slidesName;
                const idProduct=slides.idProduct;
                var ruleSlides=slides.ruleSlides;
                firebase.collection("slides").add({

                    slidesName,slidesImages:url,idProduct,ruleSlides
                }).then(()=>{
                    dispatch(Slide_ADD_Success());
                }).catch(()=>{
                    dispatch(Slide_ADD_Error());
                })
            });
        });
    }
}
export const Slide_ADD_request=()=>{
    return {
        type:types.ADD_SLIDES_REQUEST
    }
}
export const Slide_ADD_Success=()=>{
    return {
        type:types.ADD_SLIDES_SUCCESS
    }
}
export const Slide_ADD_Error=()=>{
    return {
        type:types.ADD_SLIDES_ERROR
    }
}

// reset
export const resetSlideMessage=()=>{
    return {
        type:types.RESET_SLIDES
    }
}