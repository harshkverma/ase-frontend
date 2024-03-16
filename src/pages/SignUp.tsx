import { Grid } from "@mui/material";
import "./style.scss";
import { routesName } from "../router/RoutesList";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { SignUpForm } from "../modules/signup/SignUpForm";

export const SignUp = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.signup);
  }, [isSignedIn]);

  return (
    <Grid className="homepage-background">
      <SignUpForm />
    </Grid>
  );
};
