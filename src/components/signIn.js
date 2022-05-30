import "./signIn.css";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/firestore";
import "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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

function SignIn() {
  const signInWithGoogle = () => {
    console.log("break point");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(
      ((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        // ...
      })
    );

    return <></>;
  };
}

export default SignIn;
