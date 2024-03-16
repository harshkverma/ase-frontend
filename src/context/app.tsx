import React, { useEffect, useState } from "react";
import { ContextProps, ILoginUser } from "./interface";
import { useNavigate } from "react-router-dom";
import { routesName } from "../router/RoutesList";
import {
  LoginDoctorData,
  LoginPatientData,
  LoginSecondDoctorData,
} from "../dummyData/loginUserData";
import { digicareConfig } from "../assets/constants/config";

export const AppContext = React.createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<ILoginUser>();
  const [email, setEmail] = useState<string | null | undefined>("1");

  const navigate = useNavigate();

  useEffect(() => {
    email === "ashma@gmail.com"
      ? setUser(LoginPatientData)
      : setUser(LoginDoctorData);
  }, [email]);

  const getAuthenticated = (userEmail: string) => {
    if (digicareConfig.validEmail.includes(userEmail)) return true;
    return false;
  };

  const navigationAsPerSignedStatus = (requestedPage: string) => {
    if (isSignedIn) {
      if (
        requestedPage === routesName.signin ||
        requestedPage === routesName.signup
      )
        navigate(routesName.dashboard);
      else navigate(requestedPage);
    } else {
      navigate(
        requestedPage === routesName.signup ? requestedPage : routesName.signin
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        email,
        setEmail,
        user,
        setUser,
        navigationAsPerSignedStatus,
        getAuthenticated
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
