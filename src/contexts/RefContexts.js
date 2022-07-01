import { useRef, createContext } from "react";

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
  // loader ref variables
  const loaderTextRef = useRef(null);
  const loaderImageGroupRef = useRef(null);
  const loaderContainerRef = useRef(null);

  // nav ref variables
  const navWrapperRef = useRef(null);
  const navRef = useRef(null);
  const navLinksRef = useRef(null);

  // landing page ref variables
  const descriptionRef = useRef(null);
  const heroImageRef = useRef(null);

  return (
    <RefContext.Provider
      value={{
        navWrapperRef,
        navRef,
        navLinksRef,
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
