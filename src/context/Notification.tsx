import React, { createContext, useState, ReactNode, useContext } from "react";
import { AlertColor } from "@mui/material";

type AlertState = {
  show: boolean;
  message: {
    title?: string;
    subTitle: string;
  };
  variant?: AlertColor;
  icon?: React.ReactNode;
};

type NotificationContextType = {
  setAlert: React.Dispatch<React.SetStateAction<AlertState>>;
  alert: AlertState;
};

// Create the Notification Context
export const NotificationContext = createContext<NotificationContextType>({
  setAlert: () => {},
  alert: {
    show: false,
    message: {
      title: "",
      subTitle: "",
    },
    variant: undefined,
    icon: undefined,
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
    icon: undefined,
  });

  React.useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({
          ...prev,
          show: false,
        }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  return (
    <NotificationContext.Provider value={{ alert, setAlert }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the Notification Context
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationContextProvider");
  }
  return context;
};
