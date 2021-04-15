// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_gaeeJx3cpVVXvo3TJYtM2hYacFeU6KA",
    authDomain: "clone-a332b.firebaseapp.com",
    projectId: "clone-a332b",
    storageBucket: "clone-a332b.appspot.com",
    messagingSenderId: "937568495448",
    appId: "1:937568495448:web:5816d4d00bb8801ffb272d",
    measurementId: "G-C5F7JMQQ1S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth};