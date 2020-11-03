import * as userType from './../conStants/user';
import firebase from './../config/config';

export const ALL_USER=(userData)=>{
    return{
        type:userType.ALL_USER_CONSTANT,
        userData
    }
}

export const RenderAllUserRequest=()=>{
    return (dispatch,getState,{getFirebase})=>{
        // var user = firebase.auth().currentUser;
     
        // if (user != null) {
        //     console.log(user.displayName);;
        //     console.log(user.email);;
        //     console.log(user.photoURL);;
        //     console.log(user.emailVerified);;
        //     console.log(user.uid);;   
        // }
        
       var ref = firebase.database().ref("user");
        ref.once("value")
        .then(function(snapshot) {
            console.log(snapshot);
        });
    }
}
