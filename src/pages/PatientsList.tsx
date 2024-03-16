import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientsList } from "../modules/patientsList";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";

export const PatientsList = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.patientList);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <MPatientsList />
    </DigiCareDrawer>
  );
};
