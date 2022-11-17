import { useState } from "react";
import "./toaster.style.css";

export const Toaster = ({ name }) => {
  const [show, setShow] = useState(false);
  setInterval(() => {
    return setShow(true);
  }, 3000);
  return (
    <div className={`toaster-container ${show ? "hideToaster" : ""}`}>
      <h1>no {name} was found</h1>
    </div>
  );
};
