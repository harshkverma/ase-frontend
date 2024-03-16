import React from "react";
import "./style.scss";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { History } from "../modules/history";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";

const HistoryPage = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.history);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <History />
    </DigiCareDrawer>
  );
};

export default HistoryPage;
