import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./firebase.css";

// * Your web app's Firebase configuration
// * For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsfXqgdkKfCm1plMvR3HXxun9uZIV7AZA",
  authDomain: "bullbear-be83d.firebaseapp.com",
  projectId: "bullbear-be83d",
  storageBucket: "bullbear-be83d.appspot.com",
  messagingSenderId: "294185404688",
  appId: "1:294185404688:web:4649963ed7ce2c84d8bd95",
  measurementId: "G-DB92312QSG",
};

// * Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Firebase() {
  return (
    <>
      <h1>Firebase Testing...</h1>
    </>
  );
}
export default Firebase;
