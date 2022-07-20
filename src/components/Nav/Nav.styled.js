import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
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

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.5rem;
    font-family: Inter Medium;
  }
`;

export const NavLinksWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(-100%);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    position: relative;
    height: 100%;
    transform: translateY(0);

    & > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      background-color: transparent;
    }
  }
`;

export const NavLink = styled.a`
  font-family: Forum;
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(20%);
  position: relative;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  .link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateY(0);
  }

  .link-reveal {
    position: absolute;
    transform: translateY(100%);
    display: inline-block;
    color: blue;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    opacity: 1;
    font-size: 1.35rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-family: Inter Regular;

    &:not(:last-child) {
      margin: 0 4rem 0 0;
    }
  }
`;

export const Menu = styled.button`
  width: 2.625rem;
  height: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    display: none;
  }
`;

export const MenuLine = styled.div`
  width: 100%;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
