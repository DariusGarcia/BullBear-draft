import "./login.css";
import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

import "firebase/firestore";
import "firebase/auth";

// firebase SDK specific configuration
import { firebaseConfig } from "./firebaseUtils";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const handleSubmit = (e) => {
  e.preventDefault();
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInConst = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    console.log("Initializing Google Auth");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log(`Welcome ${user.displayName}`);
        console.log("Succesfully signed in with Google");
      })

      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="parent">
      <h1 className="bullbear">BullBear</h1>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <h5>Please sign in or register if you haven't!</h5>

          <div className="label-box1">
            <label className="form-heading" htmlFor="username">
              <b>Username</b>
            </label>
            <input
              className="input-email"
              type="text"
              name="name"
              placeholder=" ex: JohnDoe34"
              // required
            />
          </div>
          <div className="label-box2">
            <label className="form-heading" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="input-pw"
              type="password"
              name="name"
              placeholder=" *******"
              // required
            />
          </div>
          <div className="btn-container">
            <div className="sign-btn">
              <button
                className="google-btn"
                type="submit"
                onClick={signInConst}
              >
                Sign in with Google
              </button>
              {/* <SignIn /> */}
            </div>

            <button className="up-btn" type="submit">
              <b>SIGN UP</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
