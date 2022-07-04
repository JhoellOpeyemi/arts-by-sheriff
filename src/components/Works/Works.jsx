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
  const imagesContainerRef = useRef(null);
  const workSectionRef = useRef(null);

  const worksTl = useRef(null);

  const revealImages = (children) => {
    const imagesArray = Array.from(children);

    imagesArray.forEach((image, index) => {
      console.log(image.firstElementChild);
      worksTl.current = gsap
        .timeline({
          defaults: {
            duration: 0.6,
          },
          scrollTrigger: {
            trigger: image,
            start: "top 75%",
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
    revealImages(imagesContainerRef.current.children);
  });

  return (
    <WorksSection ref={workSectionRef}>
      <WorksSectionHeading>Works</WorksSectionHeading>
      <ImagesContainer ref={imagesContainerRef}>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/smile1.jpg" alt="painting of woman smiling" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/jacket1.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/break-trouser-zoom.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/rick-n-morty-trouser.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/sneaker1.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/fire-slide.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/trouser2-zoom.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/smile2.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/smile3.jpg" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Overlay background="#14171a" />
          <img src="./images/rick-n-morty-jacket-zoom.jpg" alt="" />
        </ImageWrapper>
      </ImagesContainer>
    </WorksSection>
  );
};

export default Works;
