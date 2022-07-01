import { useState, useEffect, useContext, useRef } from "react";

import { gsap } from "gsap";

import { RefContext } from "../../contexts/RefContexts";

import {
  StyledNav,
  Logo,
  NavLinksWrapper,
  NavLink,
  Menu,
  MenuLine,
} from "./Nav.styled";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { navWrapperRef, navRef, navLinksRef } = useContext(RefContext);

  const navTimeline = useRef();

  const handleNav = () => {
    setNav(!nav);
  };

  console.log(nav);

  useEffect(() => {
    navTimeline.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, { y: 0 });

    if (nav) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  });
  return (
    <StyledNav ref={navWrapperRef}>
      <div>
        <Logo>ArtsBySheriff</Logo>

        <NavLinksWrapper nav={nav} ref={navRef}>
          <div ref={navLinksRef}>
            <NavLink href="/">Work</NavLink>
            <NavLink href="/">Contact</NavLink>
          </div>
        </NavLinksWrapper>

        <Menu onClick={handleNav}>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
        </Menu>
      </div>
    </StyledNav>
  );
};

export default Nav;
