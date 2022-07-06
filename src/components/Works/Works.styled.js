import styled from "styled-components";

export const WorksSection = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 7rem 0 4rem;
  border: 0;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    padding: 8rem 0 6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    overflow: hidden;
  }
`;

export const WorksSectionHeading = styled.h2`
  font-family: Forum;
  font-size: ${({ theme }) => theme.fontSize.sectionHeadingMobile};
  text-transform: uppercase;
  font-weight: 400;
  position: sticky;
  top: 40%;
  text-align: center;
  letter-spacing: 3px;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    text-align: left;
    font-size: 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: ${({ theme }) => theme.fontSize.sectionHeadingDesktop};
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
    width: calc(${({ theme }) => theme.worksImageWidthDesktop} * 10);
    height: 100vh;
    margin-top: 0rem;
    gap: 2.5rem;
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
    transform: scale(1.19);
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
      align-self: center;
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
      align-self: center;
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
      width: ${({ theme }) => theme.worksImageWidthDesktop};
      height: ${({ theme }) => theme.worksImageHeightDesktop};
      align-self: center;
    }
  }
`;
