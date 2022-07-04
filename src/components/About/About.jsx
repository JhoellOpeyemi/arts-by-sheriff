import React, { useEffect, useContext, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { RefContext } from "../../contexts/RefContexts";

import {
  AboutSection,
  Image,
  ImageContainer,
  Text,
  TextContainer,
} from "./About.styled";
import { Overlay } from "../../styles/Utilities.styled";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const {
    heroImageRef,
    canScroll,
    landingContentRef,
    aboutSectionRef,
    aboutImageRef,
    aboutTextRef,
  } = useContext(RefContext);

  const sectionRevealTl = useRef();
  const aboutTl = useRef();

  useEffect(() => {
    const body = document.querySelector("body");

    if (canScroll) {
      sectionRevealTl.current = gsap
        .timeline({
          defaults: { duration: 0.75 },
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top 48%",
            end: "center 15%",
            scrub: true,
            id: "transition",
          },
        })
        .to(landingContentRef.current, { opacity: 0, duration: 1 })
        .to(heroImageRef.current, {
          scale: 5,
          transformOrigin: "50% 50%",
          yPercent: -15,
          ease: "linear",
          duration: 6,
        })
        .to(
          heroImageRef.current,
          {
            opacity: 0,
            duration: 3,
          },
          "-=3"
        )
        .to(heroImageRef.current, { zIndex: -1 })
        .to(body, { backgroundColor: "#14171a" }, "-=3.5");
    }
  }, [canScroll, heroImageRef, landingContentRef]);

  useEffect(() => {
    aboutTl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 48%",
          end: "center 20%",
          scrub: true,
          markers: true,
          id: "about",
        },
      })
      .to(aboutImageRef.current, { opacity: 1 })
      .to(aboutImageRef.current.firstElementChild, {
        yPercent: -100,
      })
      .to(aboutTextRef.current, { opacity: 1 });
  }, [aboutImageRef, aboutTextRef, aboutSectionRef, canScroll]);

  return (
    <AboutSection ref={aboutSectionRef}>
      <ImageContainer ref={aboutImageRef}>
        <Overlay background="#14171a" />
        <Image src="./images/image.jpg" alt="A selfie of sheriff smiling" />
      </ImageContainer>

      <TextContainer ref={aboutTextRef}>
        <Text>
          Hi, I'm Sheriff Feyisitan. A custom sneaker artist based in Lagos,
          Nigeria.
        </Text>
      </TextContainer>
    </AboutSection>
  );
};

export default About;
