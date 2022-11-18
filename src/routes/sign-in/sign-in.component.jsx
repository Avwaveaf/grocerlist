import "./sign-in.style.css";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

import { SignUpForm } from "../../components/signUp-form/signUp-form.component";

export const SignIn = () => {
  const logGoogleUserHandler = async () => {
    await signInWithGooglePopUp();
    // setCurrentUser(user);
  };
  return (
    <div className="sign-in-container">
      <h1>Im sign in component</h1>
      <SignUpForm />
      <button type="button" onClick={logGoogleUserHandler}>
        sign-in with google
      </button>
    </div>
  );
};
