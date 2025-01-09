import React, { createContext, useState, ReactNode, useContext } from "react";
import { AlertColor } from "@mui/material";

type AlertState = {
  show: boolean;
  message: {
    title?: string;
    subTitle: string;
  };
  variant?: AlertColor;
};

type NotificationContextType = {
  setAlert: React.Dispatch<React.SetStateAction<AlertState>>;
  alert: AlertState;
};

export const NotificationContext = createContext<NotificationContextType>({
  setAlert: () => {},
  alert: {
    show: false,
    message: {
      title: "",
      subTitle: "",
    },
    variant: undefined,
  },
});

type NotificationContextProviderProps = {
  children: ReactNode;
};

export const NotificationContextProvider = ({
  children,
}: NotificationContextProviderProps) => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    message: { title: "", subTitle: "" },
    variant: undefined,
  });

  React.useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        setAlert({
          show: false,
          message: {
            title: "",
            subTitle: "",
          },
          variant: alert.variant,
        });
      }, 3000);
    }
  }, [alert.show, alert.variant]);

  return (
    <NotificationContext.Provider value={{ alert, setAlert }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
