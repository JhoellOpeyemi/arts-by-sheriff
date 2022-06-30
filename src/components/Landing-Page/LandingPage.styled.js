import styled from "styled-components";

export const Landing = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const LandingImage = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.landingImageWidth};
  height: ${({ theme }) => theme.landingImageHeight};
  opacity: 0;
  overflow: hidden;
  transform-origin: top;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transform: translateY(-100%) scaleX(1.2);
  object-fit: cover;
`;
