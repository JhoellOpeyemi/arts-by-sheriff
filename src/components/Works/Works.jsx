import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  WorksSection,
  WorksSectionHeading,
  ImagesContainer,
  ImageWrapper,
} from "./Works.styled";
import { Overlay } from "../../styles/Utilities.styled";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const worksSectionRef = useRef(null);
  const imagesContainerRef = useRef(null);

  const worksTl = useRef(null);
  const workHorizontalTl = useRef(null);

  const verticalScroll = () => {
    const allWorks = gsap.utils.toArray(imagesContainerRef.current.children);
    gsap.to(allWorks, {
      scrollTrigger: {
        trigger: worksSectionRef.current,
        start: "15% 5%",
        pin: true,
        scrub: 2.5,
      },
      xPercent: -100 * allWorks.length,
      duration: 1.55,
    });

    allWorks.forEach((work, index) => {
      workHorizontalTl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: work,
            start: "top center",
          },
        })
        .to(work.firstElementChild, { width: 0 });
    });
  };

  const revealImages = (children) => {
    const imagesArray = Array.from(children);

    // loop through images and set a timeline animation for each image
    imagesArray.forEach((image, index) => {
      worksTl.current = gsap
        .timeline({
          defaults: {
            duration: 0.6,
          },
          scrollTrigger: {
            trigger: image,
            start: "top 55%",
          },
        })
        .to(image.firstElementChild, {
          width: 0,
        })
        .to(
          image.lastElementChild,
          {
            scale: 1,
            transformOrigin: "top",
          },
          "<"
        );
    });
  };

  useEffect(() => {
    if (window.innerWidth < 750) {
      revealImages(imagesContainerRef.current.children);
    } else {
      verticalScroll();
    }
  });

  return (
    <WorksSection id="work" ref={worksSectionRef}>
      <WorksSectionHeading>Works</WorksSectionHeading>
      <ImagesContainer ref={imagesContainerRef}>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/smile1.jpg" alt="painting of woman smiling" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/jacket1.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/break-trouser-zoom.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/rick-n-morty-trouser.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/sneaker1.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/fire-slide.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/trouser2-zoom.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/smile2.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/smile3.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#fff" />
          <img src="./images/rick-n-morty-jacket-zoom.jpg" alt="" />
        </ImageWrapper>
      </ImagesContainer>
    </WorksSection>
  );
};

export default Works;
