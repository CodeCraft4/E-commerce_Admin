import { ThemeProvider } from "@emotion/react";
import Routes from "../Routes/Routes";
import { theme } from "@muc/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
