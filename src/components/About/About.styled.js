import styled from "styled-components";

export const AboutSection = styled.section`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    flex-direction: row-reverse;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 18rem;
  transform: rotate(7.95deg);
  overflow: hidden;
  opacity: 0;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    width: 100%;
    height: 16rem;
    margin-right: 3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  opacity: 0;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.textMobile};

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: ${({ theme }) => theme.fontSize.textDesktop};
  }
`;
