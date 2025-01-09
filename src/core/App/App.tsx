import { ThemeProvider } from "@emotion/react";
import Routes from "../Routes/Routes";
import { theme } from "@muc/styles";
import { AuthProvider, NotificationContextProvider } from "@muc/context";
import { NotificationShow } from "@muc/components";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NotificationContextProvider>
        <AuthProvider>
          <Routes />
          <NotificationShow />
        </AuthProvider>
      </NotificationContextProvider>
    </ThemeProvider>
  );
};

export default App;
