import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: none;
`;

export const LoaderTextContainer = styled.div`
  overflow: hidden;
`;

export const LoaderText = styled.p`
  font-family: "Forum";
  font-size: ${({ theme }) => theme.fontSize.loaderTextMobile};
  pointer-events: none;
  color: black;
  transform: translateY(200%) rotateX(10deg) rotateZ(30deg);
  opacity: 0;
`;

export const ImageGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.loaderImageWidth};
  height: ${({ theme }) => theme.loaderImageHeight};
  max-width: 34.375rem;
  opacity: 1;
  overflow: hidden;
  transform-origin: top;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    height: calc(${({ theme }) => theme.loaderImageHeight} * 1.25);
  }
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
