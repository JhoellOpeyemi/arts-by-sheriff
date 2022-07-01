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

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { heroImageRef } = useContext(RefContext);

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline();
  });

  return (
    <AboutSection>
      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>

      <TextContainer>
        <Text>
          Hi, I'm Sheriff Feyisitan. A custom sneaker artist based in Lagos,
          Nigeria.
        </Text>
      </TextContainer>
    </AboutSection>
  );
};

export default About;
