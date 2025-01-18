import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <h2>MovieHUB</h2>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          {signState === "Sign Up" ? (
            <button>Sign Up</button>
          ) : (
            <button>Sign In</button>
          )}

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to MovieHUB ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sig Up Now
              </span>{" "}
            </p>
          ) : (
            <p>
              Already Have An Account ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sig In Now
              </span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
