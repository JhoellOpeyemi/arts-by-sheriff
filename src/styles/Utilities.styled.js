import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ background }) => background};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-repeat: no-repeat;
  z-index: 3;
  pointer-events: none;
`;
