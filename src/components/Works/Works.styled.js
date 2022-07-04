import styled from "styled-components";

export const WorksSection = styled.section`
  width: 85%;
  margin: auto;
  padding: 7rem 0 4rem;
`;

export const WorksSectionHeading = styled.h2`
  font-family: Forum;
  font-size: ${({ theme }) => theme.fontSize.sectionHeadingMobile};
  text-transform: uppercase;
  font-weight: 400;
  position: sticky;
  top: 40%;
  text-align: center;
  letter-spacing: 4px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 7rem;
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
  }

  &:nth-child(2) {
    width: 85%;
    height: 17.5rem;
    align-self: center;
  }

  &:nth-child(3) {
    width: 47%;
    height: 15rem;
    align-self: flex-end;
  }

  &:nth-child(4) {
    width: 47%;
    height: 18rem;
    margin: -8rem 0 0;
    align-self: flex-start;
  }

  &:nth-child(5) {
    width: 95%;
    height: 14.5rem;
    align-self: center;
  }

  &:nth-child(6) {
    width: 75%;
    height: 20rem;
    align-self: flex-start;
  }

  &:nth-child(7) {
    width: 100%;
    height: 23rem;
    align-self: center;
  }

  &:nth-child(8) {
    width: 48%;
    height: 18rem;
    align-self: flex-start;
  }

  &:nth-child(9) {
    width: 48%;
    height: 18rem;
    align-self: flex-end;
    margin: -15rem 0 0;
  }

  &:nth-child(10) {
    width: 100%;
    height: 18rem;
    align-self: center;
  }
`;
