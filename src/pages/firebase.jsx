import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqmBMg6SYVzA-HfXO0_sH1whBCay3mI5A",
  authDomain: "flamingo-007.firebaseapp.com",
  projectId: "flamingo-007",
  storageBucket: "flamingo-007.appspot.com",
  messagingSenderId: "311020235693",
  appId: "1:311020235693:web:636f2d4a5089b73f11cf24",
  measurementId: "G-684H6VWT18",
};

firebase.initializeApp(firebaseConfig);