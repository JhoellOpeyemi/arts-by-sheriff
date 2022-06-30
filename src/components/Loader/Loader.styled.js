import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoaderTextContainer = styled.div`
  overflow: hidden;
`;

export const LoaderText = styled.p`
  font-family: Forum;
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
  width: ${({ theme }) => theme.landingImageWidth};
  height: ${({ theme }) => theme.landingImageHeight};
  opacity: 0;
  overflow: hidden;
  transform-origin: top;
  z-index: -1;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-100%) scaleX(1.2);
  object-fit: cover;
`;
