import { Grid } from "@mui/material";
import "./style.scss";
import { routesName } from "../router/RoutesList";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { SignInForm } from "../modules/signin";

export const SignIn = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.signin);
  }, [isSignedIn]);

  return (
    <Grid className="homepage-background">
      <SignInForm />
    </Grid>
  );
};
