import * as admin from 'firebase-admin';
var app=admin.initializeApp();

export {app, admin as default};