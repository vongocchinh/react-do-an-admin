import * as types from './../conStants/admin';
import firebase from './../config/config';
export const REGISTER_ADMIN_REQUEST=(admin)=>{
    return (dispatch,getState,{getFirebase})=>{
        firebase.auth().createUserWithEmailAndPassword(admin.userEmail,
            admin.passWord).then((res)=>{
            console.log(res);
           
        }).then((error)=>{
            console.log(error);
        });
        firebase.auth().currentUser.sendEmailVerification().then(()=> {
            console.log("da gui");
        }).catch((error)=> {
            console.log(error);
        });
    }
}
export const REGISTER_ADMIN=(admin)=>{
    return{
        type:types.ADD_ADMIN,
        admin
    }
}

// login
export const LOGIN_ADMIN_REQUEST=(user)=>{
    return (dispatch,getState,{getFirebase})=>{
        dispatch(LOGIN_ADMIN_IN());
        firebase.auth().signInWithEmailAndPassword(user.userName,user.passWord).then((res)=>{
            var users = firebase.auth().currentUser;
            if (users) {
                var userArray={
                    displayName:users.displayName,
                    email:users.email,
                    photoURL:users.photoURL,
                    uid:users.uid,
                    emailVerified:users.emailVerified,
                    phoneNumber:users.phoneNumber,
                    na:users.na
                }
                
            } 
            localStorage.setItem('userAdmin',JSON.stringify(userArray));
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