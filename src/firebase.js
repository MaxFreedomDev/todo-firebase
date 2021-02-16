import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHAIh-SQNJKKuiLIhyS00rg3TpAA8ns28",
  authDomain: "todo-firebase-2bfd6.firebaseapp.com",
  projectId: "todo-firebase-2bfd6",
  storageBucket: "todo-firebase-2bfd6.appspot.com",
  messagingSenderId: "375795418791",
  appId: "1:375795418791:web:d1ce978c661fd63c1bfd82",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
