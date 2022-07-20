import styled from "styled-components";

export const WorksSection = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 8rem 0 4rem;
  border: 0;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 10rem 0 4rem;
    overflow: hidden;
  }
`;

export const WorksSectionHeading = styled.h2`
  font-family: Forum;
  font-size: clamp(3.8rem, 6vw + 1rem, 5.7rem);
  color: ${({ theme }) => theme.colors.heading};
  text-transform: uppercase;
  font-weight: 400;
  position: sticky;
  top: 25%;
  text-align: center;
  letter-spacing: 3px;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    text-align: left;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    top: 0;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 7rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: calc(${({ theme }) => theme.worksImageWidthDesktop} * 20);
    height: 75vh;
    margin-top: 2rem;
    gap: 3.5rem;
  }
`;

export const ImageWrapper = styled.div`
  z-index: 2;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    pointer-events: all;
    will-change: transform;
  }

  &:nth-child(1) {
    width: 60%;
    height: 20rem;
    align-self: flex-end;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      height: 25rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 500px;
      height: ${({ theme }) => theme.worksImageHeightDesktop};
      border-radius: 0.4rem;
      align-self: center;
    }
  }

  &:nth-child(2) {
    width: 85%;
    height: 17.5rem;
    align-self: center;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 70%;
      height: 19rem;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 500px;
      height: 65vh;
      border-radius: 50%;
      align-self: center;
    }
  }

  &:nth-child(3) {
    width: 47%;
    height: 15rem;
    align-self: flex-end;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 55%;
      height: 19.5rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 500px;
      height: 60vh;
      border-radius: 0.4rem;
      transform: translateX(5rem);
      align-self: center;
    }
  }

  &:nth-child(4) {
    width: 47%;
    height: 18rem;
    margin: -8rem 0 0;
    align-self: flex-start;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 60%;
      height: 21rem;
      margin: 0;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 540px;
      height: 58vh;
      transform: translateX(16rem);
      border-radius: 0.4rem;
      align-self: center;
    }
  }

  &:nth-child(5) {
    width: 95%;
    height: 14.5rem;
    align-self: center;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 70%;
      height: 18.5rem;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 550px;
      height: 63vh;
      transform: translateX(23rem);
      border-radius: 1rem;
      align-self: center;
    }
  }

  &:nth-child(6) {
    width: 75%;
    height: 20rem;
    align-self: flex-start;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      height: 25rem;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 520px;
      height: 68vh;
      transform: translateX(20rem);
      clip-path: ellipse(64vh 64vh at 10% 20%);
      align-self: center;
    }
  }

  &:nth-child(7) {
    width: 100%;
    height: 23rem;
    align-self: center;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 75%;
      height: 26.5rem;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 520px;
      height: 70vh;
      clip-path: ellipse(63vh 63vh at 80% 90%);
      transform: translateX(25rem);
      align-self: center;
    }
  }

  &:nth-child(8) {
    width: 48%;
    height: 18rem;
    align-self: flex-start;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 55%;
      height: 22rem;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 525px;
      height: 75vh;
      clip-path: ellipse(65vh 65vh at 50% 90%);
      transform: translateX(33rem);
      overflow: hidden;
      align-self: flex-start;
    }
  }

  &:nth-child(9) {
    width: 48%;
    height: 18rem;
    align-self: flex-end;
    margin: -15rem 0 0;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 55%;
      height: 22rem;
      align-self: flex-end;
      margin: 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 525px;
      height: 75vh;
      clip-path: ellipse(65vh 65vh at 50% 90%);
      transform: translateX(36rem);
      align-self: flex-start;
    }
  }

  &:nth-child(10) {
    width: 100%;
    height: 18rem;
    align-self: center;

    @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
      width: 85%;
      height: 23rem;
      align-self: flex-end;
    }

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      width: 520px;
      height: ${({ theme }) => theme.worksImageHeightDesktop};
      transform: translateX(37rem);
      border-radius: 1rem;
      align-self: flex-end;
    }
  }
`;
