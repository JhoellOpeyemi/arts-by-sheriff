import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ background }) => background};
`;
