import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYAGe7lUKt__9GAUWXLXHZsZM0pCuZxoQ",
    authDomain: "facebook-messenger-clone-7340f.firebaseapp.com",
    projectId: "facebook-messenger-clone-7340f",
    storageBucket: "facebook-messenger-clone-7340f.appspot.com",
    messagingSenderId: "516242361111",
    appId: "1:516242361111:web:6aa2c2a9b713e8b7d64552",
    measurementId: "G-X56LXR3JZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;