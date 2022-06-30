import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 5;
  padding: 1.5rem 0;
  opacity: 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    max-width: 1150px;
  }
`;

export const Logo = styled.p`
  font-size: 1.3rem;
  font-family: Inter Regular;
  z-index: 5;
`;

export const NavLinksWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: ${({ nav }) => (nav ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.5s ease-out;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ${({ nav }) =>
    nav &&
    css`
      a {
        animation: fade 0.5s ease forwards;

        &:nth-child(1) {
          animation-delay: 0.5s;
        }

        &:nth-child(2) {
          animation-delay: 0.6s;
        }
      }
    `}

  @keyframes fade {
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const NavLink = styled.a`
  font-family: Forum;
  color: ${({ theme }) => theme.colors.black8};
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(20%);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Menu = styled.button`
  width: 2.625rem;
  height: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
`;

export const MenuLine = styled.div`
  width: 100%;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
