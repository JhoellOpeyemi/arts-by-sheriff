import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ContactsContainer,
  ContactsSectionHeading,
  Socials,
  SocialsGroup,
} from "./Contacts.styled";

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contactsHeadingRef = useRef(null);
  const contactsSectionRef = useRef(null);
  const emailRef = useRef(null);
  const twitterRef = useRef(null);
  const instagramRef = useRef(null);

  const socialsTl = useRef(null);

  const socialsAnimation = () => {
    socialsTl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: contactsSectionRef.current,
          start: "top 40%",
          end: "bottom bottom",
          scrub: 2,
          toggleActions: "restart complete reverse reset",
        },
      })
      .to(emailRef.current, { width: "100%", duration: 1.5 })
      .to(emailRef.current.firstElementChild, { opacity: 1, duration: 1 })
      .to(twitterRef.current, { width: "100%", duration: 1.5 })
      .to(twitterRef.current.firstElementChild, { opacity: 1, duration: 1 })
      .to(instagramRef.current, { width: "100%", duration: 1.5 })
      .to(instagramRef.current.firstElementChild, {
        opacity: 1,
        duration: 1,
      });
  };

  useEffect(() => {
    gsap.to(contactsHeadingRef.current, {
      scrollTrigger: {
        trigger: contactsSectionRef.current,
        start: "top 60%",
        end: "top 10%",
        scrub: 1.5,
        toggleActions: "restart complete reverse reset",
      },
      xPercent: window.innerWidth < 750 ? -200 : -130,
    });
  });

  useEffect(() => {
    setTimeout(() => {
      socialsAnimation();
    }, []);
  });

  return (
    <ContactsContainer ref={contactsSectionRef} id="contact">
      <ContactsSectionHeading ref={contactsHeadingRef}>
        <span>You</span> <span>have</span> <span>a</span> <span>project</span>{" "}
        <span>for</span> <span>me?</span> <span>Reach</span> <span>me</span>{" "}
        <span>on</span>
      </ContactsSectionHeading>

      <SocialsGroup>
        <Socials ref={emailRef}>
          <a href="/">
            <span>Artsbysheriff</span>
            <span>@gmail.com</span>
          </a>
        </Socials>
        <Socials ref={twitterRef}>
          <a
            href="https://twitter.com/sheriffeyisitan?s=20&t=i-cDSy_grbWDrr6c_H7czw"
            target={"_blank"}
            rel="noreferrer"
          >
            <span>Twitter</span>
            <span>@Artsbysheriff</span>
          </a>
        </Socials>
        <Socials ref={instagramRef}>
          <a href="/">
            <span>Instagram</span>
            <span>@Artsbysheriff</span>
          </a>
        </Socials>
      </SocialsGroup>
    </ContactsContainer>
  );
};

export default Contacts;
