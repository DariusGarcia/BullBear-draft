import "./App.css";
import React from "react";

// ! firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// firebase hooks for auth

// importing login component
import Login from "./components/login";
//importing landing component
import Home from "./components/Home";
//import firebase firestore component
import Firebase from "./components/firebase";

// firebase config
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
// const auth = getAuth(app);

// const user = useAuthState(auth);
function App() {
  // if signed in: user is an object
  // if signed out: user is null

  return (
    <>
      <div className="App">
        <Login />
        <Home />
        {/* {user ? <Home /> : <Login />} */}
      </div>
    </>
  );
}

export default App;
