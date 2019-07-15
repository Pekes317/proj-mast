import * as admin from 'firebase-admin';
const firebase = JSON.parse(process.env.FIREBASE_CONFIG);
firebase.credential = admin.credential.cert(require('../projectmast-19590-firebase.json'));
admin.initializeApp(firebase);

export const firestore = admin.firestore();
