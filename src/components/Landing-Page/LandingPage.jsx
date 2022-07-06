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
  HoverReveal,
} from "./LandingPage.styled";
import { Overlay } from "../../styles/Utilities.styled";

const LandingPage = ({ loadingComplete }) => {
  const {
    descriptionRef,
    heroImageRef,
    navWrapperRef,
    canScroll,
    setCanScroll,
    landingContentRef,
  } = useContext(RefContext);

  const nameImage = useRef(null);

  const tl = useRef();

  const showNameImage = (e) => {
    gsap.to(nameImage.current, {
      top: e.clientY + "px",
      left: e.clientX + "px",
      width: "200px",
      duration: 0.3,
    });
  };

  const hideNameImage = () => {
    gsap.to(nameImage.current, {
      width: 0,
      duration: 0.3,
    });
  };

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ stagger: 1, duration: 0.5, ease: "power1.in" })
      .to(heroImageRef.current, {
        opacity: 1,
        duration: 0.15,
      })
      .to(heroImageRef.current, {
        top: "unset",
        left: "50%",
        bottom: 0,
        yPercent: 0,
        xPercent: -50,
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
        <HoverReveal ref={nameImage}>
          <img src="/images/image.jpg" alt="" />
        </HoverReveal>

        <LandingContent ref={landingContentRef}>
          <Name
            onMouseMove={(e) => showNameImage(e)}
            onMouseLeave={hideNameImage}
          >
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
          <Overlay
            backgroundImage="linear-gradient(180deg, rgba(218,218,218,0) 0%, rgba(20,23,26,.98) 95%)"
            canScroll={canScroll}
          />

          <Image src={"/images/rick-n-morty-jacket-zoom.jpg"} alt="" />
        </LandingImage>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
