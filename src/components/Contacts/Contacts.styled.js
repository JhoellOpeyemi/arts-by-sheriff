import styled from "styled-components";

export const ContactsContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1200px;
  border: 0;
  overflow-x: hidden;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 5rem 0;
  }
`;

export const ContactsSectionHeading = styled.h2`
  text-transform: uppercase;
  font-size: 13.5vw;
  display: flex;
  gap: 1rem;
  font-family: Forum;
  transform: translateX(30%);

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 10vw;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    font-size: 7.8rem;
  }
`;

export const SocialsGroup = styled.div`
  margin: 5rem 0 9rem;

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    margin: 7rem 0;
  }
`;

export const Socials = styled.div`
  text-transform: uppercase;
  text-align: center;
  padding: 3rem 0;
  width: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.black8};

  a {
    font-size: 6.5vw;
    font-weight: 500;
    display: block;
    opacity: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    a {
      font-size: 4.65vw;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 4rem 0;

    a {
      font-size: 4vw;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    padding: 5rem 0;

    a {
      font-size: 2.8rem;
    }
  }
`;
