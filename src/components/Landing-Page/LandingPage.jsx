import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import Loader from "../Loader/Loader";

// styled components import
import {
  Image,
  LandingPageContainer,
  LandingContent,
  Name,
  Description,
  LandingImage,
} from "./LandingPage.styled";

const LandingPage = () => {
  const loaderTextRef = useRef(null);
  const imageListRef = useRef(null);
  const loaderContainerRef = useRef(null);
  const descRef = useRef(null);
  const landingImageRef = useRef(null);

  const ref = useRef({ loaderTextRef, imageListRef, loaderContainerRef });
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ delay: 0.8, stagger: 1, duration: 0.5 })
      .to(loaderTextRef.current, {
        y: 0,
        rotateX: "0",
        rotateZ: "0",
        opacity: 1,
      })
      .to(loaderTextRef.current, { opacity: 0, delay: 1 })
      .to(imageListRef.current, {
        opacity: 1,
        duration: 0.1,
      })
      .to(imageListRef.current.children, {
        y: 0,
        scaleX: 1,
        duration: 0.75,
        stagger: {
          each: 0.8,
          from: "start",
        },
      })
      .to(landingImageRef.current, {
        opacity: 1,
        duration: 0.1,
      })

      .to(landingImageRef.current.firstElementChild, {
        y: 0,
        scaleX: 1,
        duration: 0.75,
      })
      .to(loaderContainerRef.current, {
        opacity: 0,
        duration: 0,
      })
      .to(landingImageRef.current, {
        bottom: 0,
        width: "100%",
        height: "50vh",
        delay: 0.35,
      })
      .to(".name", {
        y: 0,
        rotateX: "0",
        rotateZ: "0",
        opacity: 1,
        stagger: 0.1,
      })
      .to(descRef.current, {
        opacity: 1,
      });
  });

  return (
    <>
      <Loader ref={ref} />
      <LandingPageContainer>
        <LandingContent>
          <Name>
            <span className="word-container">
              <span className="name">Sheriff</span>
            </span>
            <span className="word-container">
              <span className="name">&nbsp;Feyisitan</span>
            </span>
          </Name>
          <Description ref={descRef}>
            I make handprinted wearable arts
          </Description>
        </LandingContent>
        <LandingImage ref={landingImageRef}>
          <Image src={"/images/rick-n-morty-jacket-zoom.jpg"} alt="" />
        </LandingImage>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
