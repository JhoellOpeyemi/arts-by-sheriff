import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";

// styled components import
import {
  LoaderContainer,
  LoaderText,
  ImageGroup,
  Image,
  LoaderTextContainer,
} from "./Loader.styled";

const Loader = ({ setLoadingComplete }) => {
  // loader ref variables
  const loaderTextRef = useRef(null);
  const loaderImageGroupRef = useRef(null);
  const loaderContainerRef = useRef(null);

  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ delay: 0.5, stagger: 1, duration: 0.5, ease: "power1.in" })
      .to(loaderTextRef.current, {
        y: 0,
        rotateX: "0",
        rotateZ: "0",
        opacity: 1,
      })
      .to(
        loaderTextRef.current,
        { yPercent: -150, rotateX: "10", rotateZ: "20", duration: 0.5 },
        "+=0.85"
      )
      .to(loaderImageGroupRef.current.children, {
        height: "100%",
        duration: 0.8,
        stagger: { each: 0.7, from: "start" },
      })
      .to(
        loaderContainerRef.current,
        {
          opacity: 0,
          duration: 0,
          onUpdate: setLoadingComplete,
          onUpdateParams: [true],
        },
        "+=0.2"
      );
  }, [setLoadingComplete]);

  return (
    <LoaderContainer ref={loaderContainerRef}>
      <LoaderTextContainer>
        <LoaderText ref={loaderTextRef}>Art connects us</LoaderText>
      </LoaderTextContainer>

      <ImageGroup ref={loaderImageGroupRef}>
        <Image>
          <img src={"/images/smile1.jpg"} alt="" />
        </Image>
        <Image>
          <img src={"/images/jacket1-zoom.jpg"} alt="" />
        </Image>
        <Image>
          <img src={"/images/trouser2-zoom.jpg"} alt="" />
        </Image>
      </ImageGroup>
    </LoaderContainer>
  );
};

export default Loader;
