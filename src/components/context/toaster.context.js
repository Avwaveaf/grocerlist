import { createContext, useState } from "react";

export const ToasterContext = createContext({
  toasterTrigger: false,
  setToasterTrigger: () => {},
});

export const ToasterContextProvider = ({ children }) => {
  const [toasterTrigger, setToasterTrigger] = useState(false);
  const value = { toasterTrigger, setToasterTrigger };
  return (
    <ToasterContext.Provider value={value}>{children}</ToasterContext.Provider>
  );
};
