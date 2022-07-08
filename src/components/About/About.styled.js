import styled from "styled-components";

export const AboutSection = styled.section`
  width: 90%;
  margin: 3rem auto 0;
  max-width: 1200px;
  padding: 1rem 0 4rem;
`;

export const AboutDivider = styled.div`
  width: 0;
  height: 0.07rem;
  background: ${({ theme }) => theme.colors.black};
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    flex-direction: row;
    align-items: flex-start;
    margin: 6rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    gap: 5rem;
    margin: 9rem 0;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  width: 75%;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    position: sticky;
    top: 10%;
    width: 80%;
    height: 500px;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    width: 100%;
    height: 75vh;
  }
`;

export const AboutText = styled.div`
  opacity: 0;

  p {
    font-size: ${({ theme }) => theme.fontSize.textMobile};
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    width: 100%;

    p {
      font-size: ${({ theme }) => theme.fontSize.textDesktop};
      padding-bottom: 1.5rem;
    }
  }
`;
