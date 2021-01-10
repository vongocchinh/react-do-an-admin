const functions = require('firebase-functions')
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{
    const data=snap.data();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });
authData.sendMail({
from :'ngocchinh1410@gmail.com',
to:`vongocchinh1410200@gmial.com`,
subject:'Your submission Info',
text:'vongocchinh1410200@gmial.com',
html:`This is an <code>HTML</code> email body.`,
}).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});