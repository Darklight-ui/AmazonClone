// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyARmKKsehds6q9nSZuzoCxWrFMlUjBnq3k",
    authDomain: "app-clone-ad0eb.firebaseapp.com",
    databaseURL: "https://app-clone-ad0eb.firebaseio.com",
    projectId: "app-clone-ad0eb",
    storageBucket: "app-clone-ad0eb.appspot.com",
    messagingSenderId: "698652075710",
    appId: "1:698652075710:web:86e79b7777d5cec6bae0ef",
    measurementId: "G-FGC38RDMDR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };