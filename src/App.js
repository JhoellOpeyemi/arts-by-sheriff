import { ThemeProvider } from "styled-components";

import theme from "./lib/theme";

// components import
import { LandingPage } from "./components";

// styled components import
import GlobalStyles from "./styles/Global.styled";
import { Container } from "./styles/Utilities.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <LandingPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
