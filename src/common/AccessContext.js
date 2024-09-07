import React, { createContext, useState, useContext } from "react";

const AccessContext = createContext({
  hasAccess: false,
  setHasAccess: () => {},
});

export const AccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <AccessContext.Provider value={{ hasAccess, setHasAccess }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  return useContext(AccessContext);
};
