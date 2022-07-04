import { useLayoutEffect, useRef, useContext } from "react";
import { gsap } from "gsap";

import { RefContext } from "../../contexts/RefContexts";

// styled components import
import {
  Image,
  LandingPageContainer,
  LandingContent,
  Name,
  Description,
  LandingImage,
} from "./LandingPage.styled";

const LandingPage = ({ loadingComplete }) => {
  const {
    descriptionRef,
    heroImageRef,
    navWrapperRef,
    setCanScroll,
    landingContentRef,
  } = useContext(RefContext);

  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ stagger: 1, duration: 0.5, ease: "power1.in" })
      .to(heroImageRef.current, {
        opacity: 1,
        duration: 0.35,
      })
      .to(heroImageRef.current, {
        top: "unset",
        left: 0,
        bottom: 0,
        yPercent: 0,
        xPercent: 0,
        width: "100%",
        height: "50vh",
        maxWidth: "1196px",
        margin: "0 auto",
      })
      .to(".name", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      })
      .to(descriptionRef.current, {
        opacity: 1,
      })
      .to(navWrapperRef.current, {
        opacity: 1,
        onUpdate: setCanScroll,
        onUpdateParams: [true],
      });
  }, [heroImageRef, descriptionRef, navWrapperRef, setCanScroll]);

  return (
    <>
      <LandingPageContainer>
        <LandingContent ref={landingContentRef}>
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
