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
  const workHeadingRef = useRef(null);

  const worksTl = useRef(null);
  const workHorizontalTl = useRef(null);

  const workTextArray = ["W", "o", "r", "k", "s"];

  const verticalScroll = () => {
    const allWorks = gsap.utils.toArray(imagesContainerRef.current.children);
    gsap.to(allWorks, {
      scrollTrigger: {
        trigger: worksSectionRef.current,
        start: "15% 5%",
        pin: true,
        scrub: 3,
      },
      xPercent: -100 * (allWorks.length - 1),
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

    // work heading animation
    gsap.fromTo(
      workHeadingRef.current.children,
      { yPercent: 0 },
      {
        scrollTrigger: {
          trigger: workHeadingRef.current,
          start: "top 70%",
          toggleActions: "restart none none reset",
        },
        yPercent: -6,
        duration: 0.3,
        stagger: 0.1,
        yoyo: true,
        repeat: -1,
        ease: "back",
      }
    );

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
      <WorksSectionHeading ref={workHeadingRef}>
        {workTextArray.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </WorksSectionHeading>
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
