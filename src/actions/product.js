import * as type from './../conStants/product';
import {storage} from './../config/config';
import * as Message from './../conStants/Message';

export const ALL_PRODUCT=(product)=>{
    return{
        type:type.ALL_PRODUCT,
        product
    }
}

// addProduct
export const ADD_PRODUCT_REQUEST=(product)=>{
    return(dispatch,getState,{getFirebase})=>{
        dispatch(Product_Add_request());
        var firebase=getFirebase().firestore();
        const {images1}=product;
        
        
        var storages=storage.ref("images/"+(images1.name)).put(images1);
        storages.on('state_changed',
        snapshot=>{},
        error=>{
            console.log(error);
        },
        ()=>{
            storage.ref("images").child(images1.name).getDownloadURL().then((url)=>{

                const {
                    brand='',camAfter='',camBefore='',category='',
                    cpu='',description='',gpu='',
                    images3='',images4='', 
                    manhinh='',name='',pin='',priceINT='',priceSaleINT='',
                    quantityINT='',ram='',rom='',starINT=''
                }=product;

                var statusProduct=product.statusProduct;
                var statusQuantity=product.statusQuantity;
                const {images2}=product;
                    
                    var storages2=storage.ref("images/"+(images2.name)).put(images2);
                    storages2.on('state_changed',
                    snapshot=>{},
                    error=>{
                        console.log(error);
                    },
                    ()=>{
                        storage.ref("images").child(images2.name).getDownloadURL().then((url2)=>{
                           
                            firebase.collection("products").add({
                                brand,camAfter,camBefore,category,cpu,description,gpu,
                                images1:url,
                                images2:url2,
                                images3,images4,manhinh,name,pin,price:priceINT,priceSale:priceSaleINT,quantity:quantityINT,ram,rom,star:starINT,statusProduct,statusQuantity
                            }).then(()=>{
                                dispatch(ADD_PRODUCT(product));
                                dispatch(Product_Add_Success());
                            }).catch(()=>{
                                dispatch(Product_Add_Error());
                            })
                        });
                    });
               
            });
        });
    }
}
export const ADD_PRODUCT=(product)=>{
    return{
        type:type.ADD_PRODUCT,
        product
    }
}
export const Product_Add_request=()=>{
    return {
        type:Message.Product_Add_Request
    }
}

export const Product_Add_Success=()=>{
    return {
        type:Message.Product_Add_Success
    }
}

export const Product_Add_Error=()=>{
    return {
        type:Message.Product_Add_Error
    }
}



// deleteProduct
export const DELETE_PRODUCT_REQUEST=(product)=>{
    return(dispatch,getState,{getFirebase})=>{
        dispatch(Product_Delete_request());
        var firebase=getFirebase().firestore();
        const productId=product.id;
        firebase.collection("products").doc(productId).delete().then(()=>{
            dispatch(DELETE_PRODUCT(product));
            dispatch(Product_Delete_Success());
        }).catch(()=>{
            dispatch(Product_Delete_Error());
        })
    }
}
export const DELETE_PRODUCT=(product)=>{
    return{
        type:type.DELETE_PRODUCT,
        product
    }
}
export const Product_Delete_request=()=>{
    return {
        type:Message.Product_Delete_Request
    }
}

export const Product_Delete_Success=()=>{
    return {
        type:Message.Product_Delete_Success
    }
}

export const Product_Delete_Error=()=>{
    return {
        type:Message.Product_Delete_Error
    }
}

// updateProduct
export const UPDATE_PRODUCT_REQUEST=(product)=>{
    return(dispatch,getState,{getFirebase})=>{
        dispatch(Product_Update_request());
        var firebase=getFirebase().firestore();
        const {
            brand='',camAfter='',camBefore='',category='',
            cpu='',description='',gpu='',
            images2='',images3='',images4='',
            manhinh='',name='',pin='',priceINT='',priceSaleINT='',
            quantityINT='',ram='',rom='',starINT='',keyImages=''
        }=product;
        var statusProduct=product.statusProduct;
        var statusQuantity=product.statusQuantity;
        const {images1}=product;
        if(keyImages===true){
            firebase.collection("products").doc(product.id).set({
                brand,camAfter,camBefore,category,cpu,description,gpu,
                images1:images1,
                images2:images2,
                images3,images4,manhinh,name,pin,price:priceINT,priceSale:priceSaleINT,quantity:quantityINT,ram,rom,star:starINT,statusProduct,statusQuantity
            }).then(()=>{
                dispatch(ADD_PRODUCT(product));
                dispatch(Product_Update_Success());
            }).catch((error)=>{
                dispatch(Product_Update_Error(error));
            })
        }else{
            var storages=storage.ref("images/"+(images1.name)).put(images1);

            storages.on('state_changed',
            snapshot=>{},
            error=>{
                console.log(error);
            },
            ()=>{
                storage.ref("images").child(images1.name).getDownloadURL().then((url)=>{
                    firebase.collection("products").doc(product.id).set({
                        brand,camAfter,camBefore,category,cpu,description,gpu,
                        images1:url,
                        images2:images2,
                        images3,images4,manhinh,name,pin,price:priceINT,priceSale:priceSaleINT,quantity:quantityINT,ram,rom,star:starINT,statusProduct,statusQuantity
                    }).then(()=>{
                        dispatch(ADD_PRODUCT(product));
                        dispatch(Product_Update_Success());
                    }).catch((error)=>{
                        dispatch(Product_Update_Error(error));
                    })
                });
            });
        }
    }
}
export const UPDATE_PRODUCT=(product)=>{
    return{
        type:type.UPDATE_PRODUCT,
        product
    }
}
export const Product_Update_request=()=>{
    return {
        type:Message.Product_Update_Request
    }
}

export const Product_Update_Success=()=>{
    return {
        type:Message.Product_Update_Success
    }
}

export const Product_Update_Error=(error)=>{
    return {
        type:Message.Product_Update_Error,
        error
    }
}




// UpdateStatus
export const UPDATE_STATUS=(product)=>{
    return(dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        const {
            brand='',camAfter='',camBefore='',category='',
            cpu='',description='',gpu='',
            images2='',images3='',images4='',
            manhinh='',name='',pin='',price='',priceSale='',
            quantity='',ram='',rom='',star=''
        }=product;
        var statusProduct=product.statusProduct;
        var statusQuantity=product.statusQuantity;
        firebase.collection("products").doc(product.id).set({
            brand,camAfter,camBefore,category,cpu,description,gpu,
            images1:product.images1,
            images2:images2,
            images3,images4,manhinh,name,
            pin,
            price,
            priceSale,
            quantity,
            ram,
            rom,
            star,
            statusProduct:!statusProduct,
            statusQuantity
        }).then(()=>{
            dispatch(ADD_PRODUCT(product));
        })
    }
}



// reset
export const ResetMessage=()=>{
    return{
        type:Message.Product_Reset
    }
}


// update quantity bill
export const UPDATE_PRODUCT_Bill=(product,quantityBill)=>{
    return(dispatch,getState,{getFirebase})=>{
     
        var firebase=getFirebase().firestore();       
        const {
            brand='',camAfter='',camBefore='',category='',
            cpu='',description='',gpu='',
            images2='',images3='',images4='', 
            manhinh='',name='',pin='',
            quantity='',ram='',rom='',
        }=product;
        var statusProduct=product.statusProduct;
        var statusQuantity=product.statusQuantity;
        quantityBill=parseInt(quantityBill,10);
        var quantityUpdate=quantity-quantityBill;
        var {price,priceSale,star}=product;
        price=parseInt(price,10);
        priceSale=parseInt(priceSale,10);
        star=parseInt(star,10);
        firebase.collection("products").doc(product.id).set({
            brand,camAfter,camBefore,category,cpu,description,gpu,
            images1:product.images1,
            images2:images2,
            images3,images4,manhinh,name,pin,price:price,priceSale:priceSale,quantity:quantityUpdate,ram,rom,star:star,statusProduct,statusQuantity
        }).then(()=>{
        }).catch((error)=>{
        })
    }
}