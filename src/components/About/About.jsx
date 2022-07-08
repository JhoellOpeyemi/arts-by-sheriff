import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  AboutContent,
  AboutDivider,
  AboutImage,
  AboutSection,
  AboutText,
} from "./About.styled";
import { Overlay } from "../../styles/Utilities.styled";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutSectionRef = useRef(null);
  const aboutDividerRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutTimeline = useRef(null);

  const showAboutContent = () => {
    aboutTimeline.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 50%",
          id: "about",
        },
      })
      .to(aboutDividerRef.current, { width: "100%", duration: 1 })
      .to(
        aboutImageRef.current.firstElementChild,
        { yPercent: -100, duration: 0.8 },
        "+=0.2"
      )
      .to(aboutTextRef.current, { opacity: 1, duration: 0.4 }, "+=0.2");
  };

  useEffect(() => {
    showAboutContent();
  });

  return (
    <AboutSection ref={aboutSectionRef}>
      <AboutDivider ref={aboutDividerRef} />

      <AboutContent>
        <AboutImage ref={aboutImageRef}>
          <Overlay background="#fff" />
          <img src="./images/image.jpg" alt="A selfie of sheriff smiling" />
        </AboutImage>

        <AboutText ref={aboutTextRef}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos
            dicta, non temporibus eaque omnis, nihil dolor ea explicabo
            voluptatibus odit eum beatae aliquid exercitationem magnam! Impedit
            nobis nam officia consequuntur porro cumque accusantium quibusdam
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos
            dicta, non temporibus eaque omnis, nihil dolor ea explicabo
            voluptatibus odit eum beatae aliquid exercitationem magnam! Impedit
            nobis nam officia consequuntur porro cumque accusantium quibusdam
          </p>
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
