import { Route, Routes } from "react-router-dom";
import { RoutesList } from "./RoutesList";
import { AppContext } from "../context/app";
import { Homepage } from "../pages/Homepage";
import { useContext } from "react";
import { ContextProps } from "../context/interface";
import { CallingRoom } from "../pages/CallingRoom"

const Routing = () => {
  const { user } = useContext(AppContext) as ContextProps;

  const getRoutes = () => {
    var count = 0;
    const routes = [];
    while (count < RoutesList.length) {
      if (
        RoutesList[count].valid_role === "all" ||
        RoutesList[count].valid_role === user?.role
      ) {
        routes.push(
          <Route
            key={RoutesList[count].id}
            path={RoutesList[count].link}
            element={RoutesList[count].component}
          />
        );
      }
      count++;
    }
    routes.push(<Route path="/room/:roomId" element={<CallingRoom />} />);
    routes.push(<Route key="default" path="*" element={<Homepage />} />);
    return routes;
  };

  return <Routes>{getRoutes()}</Routes>;
};

export default Routing;
