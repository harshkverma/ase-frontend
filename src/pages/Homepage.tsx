import { Grid } from "@mui/material";
import "./style.scss";
import { routesName } from "../router/RoutesList";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { RealTimeCards } from "../modules/homepage/realTimeCards";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { Calling } from "../modules/calling/Calling";

export const Homepage = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.dashboard);
  }, [isSignedIn]);

  return (
    <Grid className="homepage-background">
      <DigiCareDrawer>
        <RealTimeCards />
        <Calling />
      </DigiCareDrawer>
    </Grid>
  );
};
