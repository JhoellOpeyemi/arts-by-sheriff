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
  font-size: clamp(3.1rem, 8vw + 1rem, 8rem);
  display: flex;
  gap: 1.5rem;
  font-family: Forum;
  transform: translateX(30%);
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
    font-size: clamp(2rem, 2.5vw + 1rem, 3rem);
    font-weight: 500;
    display: block;
    opacity: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 4rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    padding: 5rem 0;
  }
`;
