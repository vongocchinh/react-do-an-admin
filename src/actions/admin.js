import * as types from './../conStants/admin';
import firebase from './../config/config';
import {db,storage} from './../config/config';
export const REGISTER_ADMIN_REQUEST=(admin)=>{
    return (dispatch,getState,{getFirebase})=>{
        firebase.auth().createUserWithEmailAndPassword(admin.userEmail,
            admin.passWord).then((res)=>{
                var uidAuthentication=res.user.uid;
                var firebases=getFirebase().firestore();
                dispatch(REGISTER_ADMIN_IN());
                firebases.collection("admin").add({
                    userEmail:admin.userEmail,
                    date:new Date(),
                    uidAuthentication:uidAuthentication,
                    displayName:"",
                    address:"",
                    rule:false,
                    phone:"",
                    imagesAdmin:"",
                    levelAdmin:6
                }).then(()=>{
                    dispatch(REGISTER_ADMIN_SUCCESS());
                }).catch(()=>{
                    dispatch(REGISTER_ADMIN_ERO());
                });
        }).then((error)=>{
        });

    }
}
export const REGISTER_ADMIN=(admin)=>{
    return{
        type:types.ADD_ADMIN,
        admin
    }
}
export const REGISTER_ADMIN_IN=()=>{
    return {
        type:types.REGISTER_IN_ADMIN
    }
}


export const REGISTER_ADMIN_SUCCESS=()=>{
    return {
        type:types.REGISTER_SUCCESS_ADMIN
    }
}


export const REGISTER_ADMIN_ERO=()=>{
    return {
        type:types.REGISTER_ERO_ADMIN
    }
}

// login
export const LOGIN_ADMIN_REQUEST=(user)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGIN_ADMIN_IN());
        firebase.auth().signInWithEmailAndPassword(user.userName,user.passWord).then((res)=>{
            var users = firebase.auth().currentUser;
            if (users) {
                 db.collection("admin").where('uidAuthentication','==',users.uid).get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach(function(doc) {
                        // var idArr=doc.id;
                        console.log(doc.data());
                        var userArray={
                                    idAdmin:doc.id,
                                    emailAdmin:user.userName
                                }
                                localStorage.setItem('userAdmin',JSON.stringify(userArray));
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
            }
            dispatch(LOGIN_ADMIN_SUCCESS());
        }).catch((error)=>{
            dispatch(LOGIN_ADMIN_ERR());
        });
    }
}

export const LOGIN_ADMIN_IN=()=>{
    return {
        type:types.LOGIN_ADMIN_IN
    }
}

export const LOGIN_ADMIN_SUCCESS=()=>{
    return {
        type:types.LOGIN_ADMIN_SUCCESS
    }
}

export const LOGIN_ADMIN_ERR=()=>{
    return {
        type:types.LOGIN_ADMIN_ERROR
    }
}

export const LOGIN_ADMIN=(user)=>{
    return {
        type:types.LOGIN_ADMIN,
        user
    }
}
export const GetAdmin=()=>{
    return {
        type:types.admin_Get
    }
}
// logout
export const LOGOUT_ADMIN_REQUEST=(user)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGOUT_ADMIN_IN());
       setTimeout(() => {
            firebase.auth().signOut();
            localStorage.removeItem("userAdmin");
            dispatch(LOGOUT_ADMIN_SUCCESS());
       }, 3000);

    }
}
export const LOGOUT_ADMIN_IN=()=>{
    return {
        type:types.LOGOUT_ADMIN_IN
    }
}
export const LOGOUT_ADMIN_SUCCESS=()=>{
    return {
        type:types.LOGOUT_ADMIN_SUCCESS
    }
}
export const LOGOUT_ADMIN_ERROR=()=>{
    return {
        type:types.LOGOUT_ADMIN_ERROR
    }
}


// update
export const UpdateAdminRequest=(adminUser={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        dispatch(UPDATE_ADMIN_IN());
        var displayName=adminUser.displayName;
        var phone=adminUser.phone;
        var address=adminUser.address;
        var uidAuthentication=adminUser.uidAuthentication;
        var userEmail=adminUser.userEmail;
        var rule=adminUser.rule;
        var date=adminUser.date;
        var levelAdmin=adminUser.levelAdmin;
        var UserData=JSON.parse(localStorage.getItem('userAdmin'));
        var idAccountAdmin=UserData.idAdmin;
        var imagesAdmin=adminUser.imagesAdmin;

        firebase.collection("admin").doc(idAccountAdmin).set({
            displayName,address,uidAuthentication,userEmail,date,phone,rule,imagesAdmin,levelAdmin
        }).then((rs)=>{
            dispatch(UPDATE_ADMIN_SUCCESS());
            var userArray={
                        idAdmin:idAccountAdmin
                    }
                    localStorage.setItem('userAdmin',JSON.stringify(userArray));
        }).catch((rs)=>{
            dispatch(UPDATE_ADMIN_ERO());
        })
    }
}
export const UPDATE_IMAGES_ADMIN=(adminUser={})=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        dispatch(UPDATE_ADMIN_IN());
        var displayName=adminUser.displayName;
        var phone=adminUser.phone;
        var address=adminUser.address;
        var uidAuthentication=adminUser.uidAuthentication;
        var userEmail=adminUser.userEmail;
        var rule=adminUser.rule;
        var date=adminUser.date;
        var UserData=JSON.parse(localStorage.getItem('userAdmin'));
        var idAccountAdmin=UserData.idAdmin;
        var imagesAdmin=adminUser.imagesAdmin;
        var levelAdmin=adminUser.levelAdmin;

        var storages=storage.ref("images/"+(imagesAdmin.name)).put(imagesAdmin);
        storages.on('state_changed',
        snapshot=>{},
        error=>{
            console.log(error);
        },
        ()=>{
            storage.ref("images").child(imagesAdmin.name).getDownloadURL().then((url)=>{

                firebase.collection("admin").doc(idAccountAdmin).set({
                    displayName,address,uidAuthentication,userEmail,date,phone,rule,imagesAdmin:url,levelAdmin
                }).then((rs)=>{
                    dispatch(UPDATE_ADMIN_SUCCESS());
                    var userArray={
                                idAdmin:idAccountAdmin
                            }
                            localStorage.setItem('userAdmin',JSON.stringify(userArray));
                }).catch((rs)=>{
                    dispatch(UPDATE_ADMIN_ERO());
                })

            });
        });
    }
}


export const UPDATE_ADMIN_SUCCESS=()=>{
    return {
        type:types.UPDATE_ADMIN_SUCCESS
    }
}
export const UPDATE_ADMIN_IN=()=>{
    return {
        type:types.UPDATE_ADMIN_IN
    }
}
export const UPDATE_ADMIN_ERO=()=>{
    return {
        type:types.UPDATE_ADMIN_ERO
    }
}



export const resetRegisterAdmin=()=>{
    return {
        type:types.RESET_REGISTER_ADMIN
    }
}


export const GetAccountAdmin=()=>{
    return (dispatch,getState,{getFirebase})=>{
        var UserData=JSON.parse(localStorage.getItem('userAdmin'));
        var idAccountAdmin=UserData.idAdmin;
        // var firebase=getFirebase().firestore();
        db.collection("admin").doc(idAccountAdmin).get().then(
            (res)=>{
                dispatch(getAccountAdmin(res.data()));
            }
        ).catch(
            (res)=>{
                console.log(res);
            }
        )
    }
}
export const getAccountAdmin=(admin)=>{
    return {
        type:types.GET_ACCOUNT_ADMIN,
        admin
    }
}


export const updateLevel=(adminUser)=>{
    return (dispatch,getState,{getFirebase})=>{
        var firebase=getFirebase().firestore();
        dispatch(UPDATE_ADMIN_IN());
        var displayName=adminUser.data.displayName;
        var phone=adminUser.data.phone;
        var address=adminUser.data.address;
        var uidAuthentication=adminUser.data.uidAuthentication;
        var userEmail=adminUser.data.userEmail;
        var rule=adminUser.data.rule;
        var date=adminUser.data.date;
        var levelAdmin=adminUser.level;
        var idAccountAdmin=adminUser.data.id;
        var imagesAdmin=adminUser.data.imagesAdmin;
        firebase.collection("admin").doc(idAccountAdmin).set({
            displayName,address,uidAuthentication,userEmail,date,phone,rule,imagesAdmin,levelAdmin
        }).then((rs)=>{
            dispatch(UPDATE_ADMIN_SUCCESS());
        }).catch((rs)=>{
            dispatch(UPDATE_ADMIN_ERO());
        })
    }
}