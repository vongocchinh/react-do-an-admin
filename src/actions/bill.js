import * as billType from './../conStants/bill';
export const UpdateBillRules=(bill={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
       dispatch(UPDATE_REQUEST());
        const billId=bill.id;
        const {
            email='',
            name='',
            phone='',
            address='',
            tinh='',
            huyen='',
            xa='',
            cart='',
            userName='',
            userMail='',
            date=new Date(),
            uid=''
        }=bill;
        firebase.collection("bill").doc(billId).set({
            email,name,phone,address,tinh,huyen,xa,cart,userName,userMail,rulesBill:2,date,uid
        }).then(()=>{
           dispatch(UPDATE_SUCCESS());
        }).catch(()=>{
           dispatch(UPDATE_ERROR());
        })
    }
}
export const rulesBillGo=(bill={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
       dispatch(UPDATE_REQUEST());
        const billId=bill.id;
        const {
            email='',
            name='',
            phone='',
            address='',
            tinh='',
            huyen='',
            xa='',
            cart='',
            userName='',
            userMail='',
            date=new Date(),
            uid=''
        }=bill;
        firebase.collection("bill").doc(billId).set({
            email,name,phone,address,tinh,huyen,xa,cart,userName,userMail,rulesBill:3,date,uid
        }).then(()=>{
           dispatch(UPDATE_SUCCESS());
        }).catch(()=>{
           dispatch(UPDATE_ERROR());
        })
    }
}
export const rulesBillSuccess=(bill={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
       dispatch(UPDATE_REQUEST());
        const billId=bill.id;
        const {
            email='',
            name='',
            phone='',
            address='',
            tinh='',
            huyen='',
            xa='',
            cart='',
            userName='',
            userMail='',
            date=new Date(),
            uid=''
        }=bill;
        firebase.collection("bill").doc(billId).set({
            email,name,phone,address,tinh,huyen,xa,cart,userName,userMail,rulesBill:4,date,uid
        }).then(()=>{
           dispatch(UPDATE_SUCCESS());
        }).catch(()=>{
           dispatch(UPDATE_ERROR());
        })
    }
}

export const UPDATE_REQUEST=()=>{
    return {
        type:billType.BILL_UPDATE_REQUEST

    }
}
export const UPDATE_SUCCESS=()=>{
    return {
        type:billType.BILL_UPDATE_SUCCESS

    }
}
export const UPDATE_ERROR=()=>{
    return {
        type:billType.BILL_UPDATE_ERROR

    }
}
export const Reset_Update_Bill=()=>{
    return {
        type:billType.Reset_Update_Bill
    }
}

export const BILL_DELETE_REQUEST=(bill)=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        const billID=bill.id;
        firebase.collection("bill").doc(billID).delete().then(()=>{
            dispatch(Delete_Bill_In);
            dispatch(Delete_Bill_Success());
        }).catch(()=>{
            dispatch(Delete_Bill_Error());
        })
    }
}

export const Delete_Bill_In=()=>{
    return {
        type:billType.BILL_DELETE_REQUEST
    }
}

export const Delete_Bill_Success=(bill)=>{
    return {
        type:billType.BILL_DELETE_SUCCESS
    }
}

export const Delete_Bill_Error=(bill)=>{
    return {
        type:billType.BILL_DELETE_ERROR
    }
}