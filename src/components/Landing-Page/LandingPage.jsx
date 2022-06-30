import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import Loader from "../Loader/Loader";

// styled components import
import { Image, Landing, LandingImage } from "./LandingPage.styled";

const LandingPage = () => {
  const loaderText = useRef(null);
  const imageList = useRef(null);
  const landingImage = useRef(null);
  const ref = useRef({ loaderText, imageList });
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ delay: 0.8, stagger: 1, duration: 0.5 })
      .to(loaderText.current, {
        y: 0,
        rotateX: "0",
        rotateZ: "0",
        opacity: 1,
      })
      .to(loaderText.current, { opacity: 0, delay: 1 })
      .to(imageList.current, {
        opacity: 1,
        duration: 0.1,
      })
      .to(imageList.current.children, {
        y: 0,
        scaleX: 1,
        duration: 0.75,
        stagger: {
          each: 1,
          from: "start",
        },
      })
      .to(landingImage.current, {
        opacity: 1,
        duration: 0.1,
      })

      .to(landingImage.current.firstElementChild, {
        y: 0,
        scaleX: 1,
        duration: 0.75,
      })
      .to(imageList.current, {
        opacity: 0,
        duration: 0,
      })
      .to(landingImage.current, {
        bottom: 0,
        width: "100%",
        height: "50vh",
      });
  });

  return (
    <>
      <Loader ref={ref} />
      <Landing>
        <LandingImage ref={landingImage}>
          <Image src={"/images/rick-n-morty-jacket-zoom.jpg"} alt="" />
        </LandingImage>
      </Landing>
    </>
  );
};

export default LandingPage;
