import "./sign-in.style.css";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

import { ReactComponent as GoogleIconSVG } from "../../assets/googleIcon.svg";

export const SignIn = () => {
  const logGoogleUserHandler = async () => {
    await signInWithGooglePopUp();
    // setCurrentUser(user);
  };
  return (
    <div className="sign-in-container">
      <div className="signin-card">
        <div className="left-signin-card">
          <span className="left-signin-card-title">Sign-in With Google</span>

          <div
            onClick={logGoogleUserHandler}
            className="login-google-container"
          >
            <GoogleIconSVG className="loginGoogle-icon" />
            <button type="button" className="loginGoogle-button">
              Continue with google
            </button>
          </div>
        </div>
        <div className="right-signin-card">
          <span>Good to see you again!</span>
          <span className="right-signin-title">Welcome</span>
          <span>
            Login with your Google account to continue and start your journey
          </span>
        </div>
      </div>
    </div>
  );
};
