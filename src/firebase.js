import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4YHZBbdIgmvsWbABhEETgv1GZyDGfnDU",
    authDomain: "clone-d781d.firebaseapp.com",
    projectId: "clone-d781d",
    storageBucket: "clone-d781d.appspot.com",
    messagingSenderId: "104459760754",
    appId: "1:104459760754:web:196a4e56f165838e50feeb",
    measurementId: "G-SMBT5BZTCL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()
const createdAt = firebase.firestore.FieldValue.serverTimestamp()

export {db, auth, createdAt}
  
