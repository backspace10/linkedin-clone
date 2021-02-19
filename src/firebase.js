import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqyIH2Mci_XroBMxnH2H1NVykMvNz_W_w",
  authDomain: "linkedin-clone-c2938.firebaseapp.com",
  projectId: "linkedin-clone-c2938",
  storageBucket: "linkedin-clone-c2938.appspot.com",
  messagingSenderId: "682130424136",
  appId: "1:682130424136:web:8eb2f7f87a1113cdec337d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //for connection
const db = firebaseApp.firestore(); //for db
const auth = firebase.auth(); //for auth

export { db, auth };
