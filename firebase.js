import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD941xyQvd-4mOdL8R7U3fFbxaf6sf2poY",
  authDomain: "shopyme-webapp.firebaseapp.com",
  projectId: "shopyme-webapp",
  storageBucket: "shopyme-webapp.appspot.com",
  messagingSenderId: "176807565773",
  appId: "1:176807565773:web:4278f317905bb6414c8c84",
  measurementId: "G-Z0X03MWL9Y"
};

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();

  export default db;