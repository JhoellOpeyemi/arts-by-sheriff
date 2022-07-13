import styled from "styled-components";

export const LandingPageContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const LandingContent = styled.div`
  position: absolute;
  top: 0;
  min-height: 50vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
`;

export const Name = styled.h1`
  font-family: Forum;
  font-size: ${({ theme }) => theme.fontSize.largeTextMobile};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .word-container {
    overflow: hidden;
  }

  .name {
    transform: translateY(100%);
    opacity: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: ${({ theme }) => theme.fontSize.largeTextDesktop};
  }
`;

export const HoverReveal = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -65%);
  width: 0;
  height: 200px;
  opacity: 0.85;
  pointer-events: none;
  display: none;
  mix-blend-mode: multiply;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    display: inline-block;
  }
`;

export const Description = styled.p`
  font-family: Inter Regular;
  font-size: ${({ theme }) => theme.fontSize.mediumTextMobile};
  color: ${({ theme }) => theme.colors.black8};
  margin: 2rem 1.5rem;
  opacity: 0;
  line-height: 1.3;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: ${({ theme }) => theme.fontSize.mediumTextDesktop};
  }
`;

export const LandingImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: ${({ theme }) => theme.loaderImageWidth};
  height: ${({ theme }) => theme.loaderImageHeight};
  max-width: 34.375rem;
  overflow: hidden;
  opacity: 1;
  transform-origin: top;
  transform-style: preserve-3d;
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0px;
  overflow: hidden;

  img {
    width: 100%;
    height: ${({ theme }) => theme.loaderImageHeight};
    object-fit: cover;
    object-position: top;
  }
`;
