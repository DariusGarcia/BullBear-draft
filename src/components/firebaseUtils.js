import React from "react";

// ! firebase imports
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// firebase hooks for auth
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function FirebaseConfig() {
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
  const auth = getAuth(app);
}

export default FirebaseConfig;
