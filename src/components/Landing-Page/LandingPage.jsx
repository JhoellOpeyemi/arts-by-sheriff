import { useLayoutEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";

import { RefContext } from "../../contexts/RefContexts";

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
  const [loadingComplete, setLoadingComplete] = useState(false);
  const {
    loaderTextRef,
    loaderImageGroupRef,
    descriptionRef,
    heroImageRef,
    navRef,
  } = useContext(RefContext);

  const tl = useRef();

  useLayoutEffect(() => {
    const imagesContainer = loaderImageGroupRef.current.firstElementChild;

    tl.current = gsap
      .timeline({ delay: 0.8, stagger: 1, duration: 0.5 })
      .to(loaderTextRef.current, {
        y: 0,
        rotateX: "0",
        rotateZ: "0",
        opacity: 1,
      })
      .to(loaderTextRef.current, { opacity: 0, delay: 1 })
      .to(imagesContainer, {
        height: 350,
        duration: 1,
        delay: 0.1,
      })
      .to(imagesContainer.children, {
        height: 0,
        scale: 1.15,
        duration: 1,
        stagger: {
          each: 1.1,
          from: "end",
        },
        delay: 0.2,
      })
      .to(heroImageRef.current, {
        opacity: 1,
        duration: 0.1,
        delay: -2,
      })
      .to(heroImageRef.current, {
        bottom: 0,
        width: "100%",
        height: "50vh",
        delay: 0.4,
        onUpdate: setLoadingComplete,
        onUpdateParams: [true],
      })
      .to(".name", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      })
      .to(descriptionRef.current, {
        opacity: 1,
      })
      .to(navRef.current, {
        opacity: 1,
      });
  }, [
    loaderImageGroupRef,
    loaderTextRef,
    heroImageRef,
    descriptionRef,
    navRef,
  ]);

  return (
    <>
      <Loader />
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
          <Description ref={descriptionRef}>
            I make handprinted wearable arts
          </Description>
        </LandingContent>
        <LandingImage ref={heroImageRef} loadingComplete={loadingComplete}>
          <Image src={"/images/rick-n-morty-jacket-zoom.jpg"} alt="" />
        </LandingImage>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
