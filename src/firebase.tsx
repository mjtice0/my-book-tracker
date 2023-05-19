import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
     });
//@ts-ignore
export const auth = firebase.auth();
//@ts-ignore
export const firestore = firebase.firestore();
//@ts-ignore
export const storage = firebase.storage();

export default app 