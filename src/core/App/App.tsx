import { ThemeProvider } from "@emotion/react";
import Routes from "../Routes/Routes";
import { theme } from "@muc/styles";
import { AuthProvider, NotificationContextProvider } from "@muc/context";
import { SnackBar } from "@muc/components";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NotificationContextProvider>
        <AuthProvider>
          <Routes />
          <SnackBar />
        </AuthProvider>
      </NotificationContextProvider>
    </ThemeProvider>
  );
};

export default App;
