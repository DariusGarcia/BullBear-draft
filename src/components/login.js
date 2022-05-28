import "./login.css";
import React from "react";
// import topo from '../topo.jpg';

const Login = () => {
  return (
    <div className="parent">
      {/* <h1>
        {" "}
        <span className="bull">Bull</span>
        <span className="bear">Bear</span>
      </h1> */}
      <div className="login-container">
        <form className="login-form">
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
              required
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
              required
            />
          </div>
          <div className="btn-container">
            <button className="sign-btn" type="submit">
              <b>SIGN IN</b>
            </button>
            <button className="up-btn" type="submit">
              <b>SIGN UP</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
