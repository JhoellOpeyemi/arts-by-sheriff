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

  const handleNav = () => {
    navTimeline.current.reversed()
      ? navTimeline.current.play()
      : navTimeline.current.reverse();
  };

  useEffect(() => {
    navTimeline.current = gsap
      .timeline({ paused: true, reversed: true })
      .to(navRef.current, { y: 0 })
      .to(navLinksRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back",
      })
      .to(menuRef.current.firstElementChild, {
        rotateZ: 35,
        y: "130%",
        x: "-5%",
      })
      .to(menuRef.current.lastElementChild, {
        rotateZ: -35,
        y: "-200%",
        x: "15%",
      });
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
            <NavLink href="/" onClick={handleNav}>
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
