import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

import "firebase/firestore";
import "firebase/auth";

function SignOut() {
  const firebaseConfig = {
    apiKey: "AIzaSyAsfXqgdkKfCm1plMvR3HXxun9uZIV7AZA",
    authDomain: "bullbear-be83d.firebaseapp.com",
    projectId: "bullbear-be83d",
    storageBucket: "bullbear-be83d.appspot.com",
    messagingSenderId: "294185404688",
    appId: "1:294185404688:web:4649963ed7ce2c84d8bd95",
    measurementId: "G-DB92312QSG",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default SignOut;
