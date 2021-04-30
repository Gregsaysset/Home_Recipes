import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const Config = {
  apiKey: "AIzaSyDxTLwl1CF7wBS8QD2ixH8dsI_1AM6H38w",
  authDomain: "applied-javascript1-e214f.firebaseapp.com",
  projectId: "applied-javascript1-e214f",
  storageBucket: "applied-javascript1-e214f.appspot.com",
  messagingSenderId: "436578948952",
  appId: "1:436578948952:web:8531863b82a49e9d16372d"
};
  // Initialize Firebase
  firebase.initializeApp(Config);
export default firebase;
