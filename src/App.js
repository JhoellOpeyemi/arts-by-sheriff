import { useRef } from "react";

import { ThemeProvider } from "styled-components";
import { RefProvider } from "./contexts/RefContexts";

import theme from "./lib/theme";

// components import
import { LandingPage, Nav, About } from "./components";

// styled components import
import GlobalStyles from "./styles/Global.styled";
import { Container } from "./styles/Utilities.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RefProvider>
        <GlobalStyles />
        <Container>
          <Nav />
          <LandingPage />
          <About />
        </Container>
      </RefProvider>
    </ThemeProvider>
  );
}

export default App;
