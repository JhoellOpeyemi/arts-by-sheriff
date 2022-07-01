import styled, { css } from "styled-components";

export const LandingPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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

  .name {
    transform: translateY(100%);
    opacity: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: ${({ theme }) => theme.fontSize.largeTextDesktop};
  }
`;

export const Description = styled.p`
  font-family: Inter Regular;
  font-size: ${({ theme }) => theme.fontSize.mediumTextMobile};
  color: ${({ theme }) => theme.colors.black8};
  margin: 1.5rem;
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
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.loaderImageWidth};
  height: ${({ theme }) => theme.loaderImageHeight};
  opacity: 0;
  max-width: 34.375rem;
  overflow: hidden;
  transform-origin: top;
  z-index: -1;

  ${({ loadingComplete }) =>
    loadingComplete &&
    css`
      top: auto;
      left: auto;
      bottom: 0;
      transform: translate(0%);
      max-width: 74.75rem;
    `};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
