import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBDc_dbCuPx0RhZIBl6TtYvxxmCwML3c2s",
    authDomain: "do-an-web-ban-hang.firebaseapp.com",
    databaseURL: "https://do-an-web-ban-hang.firebaseio.com",
    projectId: "do-an-web-ban-hang",
    storageBucket: "do-an-web-ban-hang.appspot.com",
    messagingSenderId: "330696788458",
    appId: "1:330696788458:web:29661d2139627230718a93",
    measurementId: "G-PBY8ST2Y4R"
  };
 firebase.initializeApp(firebaseConfig);
 var db=firebase.firestore(); 

const storage =firebase.storage();
export {storage,db ,firebase as default};