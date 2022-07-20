import { useEffect, useRef } from "react";

import { gsap } from "gsap";

import {
  StyledNav,
  Logo,
  NavLinksWrapper,
  NavLink,
  Menu,
  MenuLine,
} from "./Nav.styled";

const Nav = ({ navWrapperRef }) => {
  const navRef = useRef(null);
  const navLinksRef = useRef(null);
  const menuRef = useRef(null);

  const navTimeline = useRef(null);

  const showLink = () => {
    const links = document.querySelectorAll(".link");

    links.forEach((item) => {
      const linkTl = gsap
        .timeline({ paused: true })
        .to(item.querySelector(".link-main"), {
          yPercent: -100,
          duration: 0.25,
        })
        .to(
          item.querySelector(".link-reveal"),
          {
            yPercent: -110,
            duration: 0.25,
          },
          "<"
        );

      item.addEventListener("mouseenter", () => linkTl.play());
      item.addEventListener("mouseleave", () => linkTl.reverse());
    });
  };

  const handleNav = () => {
    navTimeline.current.reversed()
      ? navTimeline.current.play()
      : navTimeline.current.reverse();
  };

  useEffect(() => {
    navTimeline.current = gsap
      .timeline({
        paused: true,
        reversed: true,
      })
      .to(navRef.current, { y: 0 })
      .to(navLinksRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
      })
      .to(
        menuRef.current.firstElementChild,
        {
          rotate: 35,
          y: 5,
          duration: 0.5,
        },
        0.3
      )
      .to(
        menuRef.current.lastElementChild,
        {
          rotate: -35,
          y: -3,
          duration: 0.5,
        },
        0.3
      );
    showLink();
  });

  return (
    <StyledNav ref={navWrapperRef}>
      <div>
        <Logo>ArtsBySheriff</Logo>

        <NavLinksWrapper ref={navRef}>
          <div ref={navLinksRef}>
            <NavLink href="#work" onClick={handleNav}>
              <div className="link">
                <span className="link-main">Work</span>
                <span className="link-reveal">Work</span>
              </div>
            </NavLink>
            <NavLink href="#about" onClick={handleNav}>
              <div className="link">
                <span className="link-main">About</span>
                <span className="link-reveal">About</span>
              </div>
            </NavLink>
            <NavLink href="#contact" onClick={handleNav}>
              <div className="link">
                <span className="link-main">Contact</span>
                <span className="link-reveal">Contact</span>
              </div>
            </NavLink>
          </div>
        </NavLinksWrapper>

        <Menu onClick={handleNav} ref={menuRef}>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
        </Menu>
      </div>
    </StyledNav>
  );
};

export default Nav;
