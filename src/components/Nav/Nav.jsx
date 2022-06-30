import { useState, useEffect, useContext } from "react";

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
  const { navRef } = useContext(RefContext);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  });
  return (
    <StyledNav ref={navRef}>
      <div>
        <Logo>ArtsBySheriff</Logo>

        <NavLinksWrapper nav={nav}>
          <div>
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
