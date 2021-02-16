import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDee0LkBkyzHNfhYpBzraT-M19S8QMWZAE",
  authDomain: "todo-firebase-b6fa8.firebaseapp.com",
  projectId: "todo-firebase-b6fa8",
  storageBucket: "todo-firebase-b6fa8.appspot.com",
  messagingSenderId: "1059935203430",
  appId: "1:1059935203430:web:abe22b2801e0042c057da7",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
