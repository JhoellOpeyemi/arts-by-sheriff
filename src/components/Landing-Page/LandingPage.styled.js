import styled from "styled-components";

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
  height: 50vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 0.9rem;
`;

export const Name = styled.h1`
  font-family: Inter SemiBold;
  font-size: ${({ theme }) => theme.fontSize.largeTextMobile};
  text-transform: uppercase;
  letter-spacing: 2px;

  .name {
    transform: translateY(120%) rotateX(10deg) rotateZ(10deg);
    opacity: 0;
  }
`;

export const Description = styled.p`
  font-family: Forum;
  font-size: ${({ theme }) => theme.fontSize.mediumTextMobile};
  color: ${({ theme }) => theme.colors.black4};
  margin: 2rem 0 3rem;
  opacity: 0;
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
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-100%) scaleX(1.2);
  object-fit: cover;
`;
