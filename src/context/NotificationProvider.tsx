import React, { createContext, useContext, useState } from "react";
import NotificationComponent from "../components/notification";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (msg:string) => void;
  getSuccess: (msg:string)=>void;
};

type NotificationProviderType = {
  children: JSX.Element;
};

export const NotificationContext = createContext<ContextProps | null>(null);

const NotificationProvider: React.FC<NotificationProviderType> = ({
  children,
}) => {
  const [mesg, setMsg] = useState("");
  const [open, setOpen] = useState(Boolean);
  const [seveirty, setSeveirty] = useState<AlertColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setSeveirty("error");
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setSeveirty("success");
    setOpen(true);
    setMsg(msg);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <div>
      <NotificationContext.Provider value={value}>
        <NotificationComponent 
          handleClose={handleClose}
          open={open}
          severity={seveirty}
          msg={mesg}
        />
          {children}
        
      </NotificationContext.Provider>
    </div>
  );
};

export default NotificationProvider;


export const useNotification = ()=>{

  const context = useContext(NotificationContext)

  if(!context) throw new Error("No existe contexto")
  return context;

  
}