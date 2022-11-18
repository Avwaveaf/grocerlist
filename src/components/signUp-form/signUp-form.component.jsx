import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./signUp-form.style.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        confirmPassword
      );
      const userDocReference = await createUserDocFromAuth(user, {
        displayName: displayName,
      });
      resetFormFields();
      // setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        prompt("Email Already in use, please Login");
      }
      console.log("failed to create user account ", error.message);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="signUp-container">
      <h1>Register your Email Account</h1>
      <form onSubmit={onSubmitHandler}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />
        <label>Email Address</label>
        <input
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
