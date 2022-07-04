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

const Loader = ({ loadingComplete, setLoadingComplete }) => {
  // loader ref variables
  const loaderTextRef = useRef(null);
  const loaderImageGroupRef = useRef(null);
  const loaderContainerRef = useRef(null);

  const tl = useRef();

  useLayoutEffect(() => {
    const imagesContainer = loaderImageGroupRef.current.firstElementChild;

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
        "+=1"
      )
      .to(
        imagesContainer,
        {
          height: 400,
          duration: 1,
        },
        "+=0.2"
      )
      .to(
        imagesContainer.children,
        {
          height: 0,
          scale: 1.15,
          duration: 1,
          stagger: {
            each: 1.1,
            from: "end",
          },
        },
        "+=0.2"
      )
      .to(loaderContainerRef.current, {
        opacity: 0,
        duration: 0,
        onUpdate: setLoadingComplete,
        onUpdateParams: [true],
      });
  }, [setLoadingComplete]);

  return (
    <LoaderContainer ref={loaderContainerRef}>
      <LoaderTextContainer>
        <LoaderText ref={loaderTextRef}>Art connects us</LoaderText>
      </LoaderTextContainer>

      <ImageGroup ref={loaderImageGroupRef}>
        <div>
          <Image src={"/images/smile1.jpg"} alt="" />
          <Image src={"/images/jacket1-zoom.jpg"} alt="" />
          <Image src={"/images/trouser2-zoom.jpg"} alt="" />
        </div>
      </ImageGroup>
    </LoaderContainer>
  );
};

export default Loader;
