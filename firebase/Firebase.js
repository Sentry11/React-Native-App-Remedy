import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhtLNi0y69ESvgG5gAmL6C0GKBzJHdwpk",
    authDomain: "nativechat-589d7.firebaseapp.com",
    projectId: "nativechat-589d7",
    storageBucket: "nativechat-589d7.appspot.com",
    messagingSenderId: "312046943011",
    appId: "1:312046943011:web:5fe9b8b91b28731e9e2a96",
    measurementId: "G-FVRQ9434KH"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
