import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { RefProvider } from "./contexts/RefContexts";

import theme from "./lib/theme";

// components import
import { LandingPage, Nav, Loader, Works, About } from "./components";

// styled components import
import GlobalStyles from "./styles/Global.styled";
import { Container } from "./styles/Utilities.styled";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <RefProvider>
        <GlobalStyles />
        {!loadingComplete ? (
          <Loader
            loadingComplete={loadingComplete}
            setLoadingComplete={setLoadingComplete}
          />
        ) : (
          <>
            <Nav />
            <LandingPage loadingComplete={loadingComplete} />
            <Container>
              <Works />
              <About />
            </Container>
          </>
        )}
      </RefProvider>
    </ThemeProvider>
  );
}

export default App;
