import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWpQHDC9ThOwKU3qz0qOhl3qjBLltqZEw",
  authDomain: "tinder-clone-a5137.firebaseapp.com",
  databaseURL: "https://tinder-clone-a5137.firebaseio.com",
  projectId: "tinder-clone-a5137",
  storageBucket: "tinder-clone-a5137.appspot.com",
  messagingSenderId: "287980669724",
  appId: "1:287980669724:web:9668cd221852032cce88d9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
