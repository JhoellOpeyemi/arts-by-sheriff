import { useState, useRef } from "react";

import { ThemeProvider } from "styled-components";

import theme from "./lib/theme";

// components import
import { LandingPage, Nav, Loader, Works, About, Contacts } from "./components";

// styled components import
import GlobalStyles from "./styles/Global.styled";
import { Container } from "./styles/Utilities.styled";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navWrapperRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!loadingComplete ? (
        <Loader setLoadingComplete={setLoadingComplete} />
      ) : (
        <>
          <Nav navWrapperRef={navWrapperRef} />
          <LandingPage navWrapperRef={navWrapperRef} />
          <Container>
            <Works />
            <About />
            <Contacts />
          </Container>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
