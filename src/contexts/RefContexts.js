import { useState, useRef, createContext } from "react";

export const RefContext = createContext();

export const RefProvider = ({ children }) => {
  // states
  const [canScroll, setCanScroll] = useState(false);

  // loader ref variables
  const loaderTextRef = useRef(null);
  const loaderImageGroupRef = useRef(null);
  const loaderContainerRef = useRef(null);

  // nav ref variables
  const navWrapperRef = useRef(null);
  const navRef = useRef(null);
  const navLinksRef = useRef(null);

  // landing page ref variables
  const landingContentRef = useRef(null);
  const descriptionRef = useRef(null);
  const heroImageRef = useRef(null);

  // about section ref variables
  const aboutSectionRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

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
        canScroll,
        setCanScroll,
        aboutSectionRef,
        aboutImageRef,
        aboutTextRef,
        landingContentRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};
