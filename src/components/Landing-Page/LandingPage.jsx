import { useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

const LandingPage = ({ navWrapperRef }) => {
  const [ready, setReady] = useState(false);

  // landing page ref variables
  const landingContentRef = useRef(null);
  const descriptionRef = useRef(null);
  const heroImageRef = useRef(null);

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

  const heroImageZoom = () => {
    gsap.to(heroImageRef.current.lastElementChild, {
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top 48%",
        scrub: 0.75,
      },
      scale: 1.35,
    });
  };

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ stagger: 1, duration: 0.5, ease: "power1.in" })
      .to(heroImageRef.current.firstElementChild, {
        height: "100%",
        duration: 0.6,
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
      .to(
        heroImageRef.current.firstElementChild.firstElementChild,
        {
          height: "100%",
        },
        "<"
      )
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
        onUpdate: setReady,
        onUpdateParams: [true],
      });

    if (ready) heroImageZoom();
  }, [heroImageRef, descriptionRef, navWrapperRef, ready]);

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
        <LandingImage ref={heroImageRef}>
          <Image>
            <img src={"/images/rick-n-morty-jacket-zoom.jpg"} alt="" />
          </Image>
        </LandingImage>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
