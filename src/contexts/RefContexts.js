import { useRef, createContext } from "react";

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
  // loader ref variables
  const loaderTextRef = useRef(null);
  const loaderImageGroupRef = useRef(null);
  const loaderContainerRef = useRef(null);

  // landing page ref variables
  const navRef = useRef(null)
  const descriptionRef = useRef(null);
  const heroImageRef = useRef(null);

  return (
    <RefContext.Provider
      value={{
      navRef,
        loaderTextRef,
        loaderImageGroupRef,
        loaderContainerRef,
        descriptionRef,
        heroImageRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};
