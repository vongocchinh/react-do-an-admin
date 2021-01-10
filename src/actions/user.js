import * as userType from './../conStants/user';
import firebase from './../config/config';
// import {db} from './../config/config';
export const ALL_USER=(userData)=>{
    return{
        type:userType.ALL_USER_CONSTANT,
        userData
    }
}

export const RenderAllUserRequest=()=>{
    return (dispatch,getState,{getFirebase})=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            } else {
              // No user is signed in.
            }
          });

    }
}
