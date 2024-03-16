import { useEffect } from "react";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientDetails } from "../modules/patientDetails";

export const DigicarePatientDetails = () => {
    
  useEffect(() => {}, []);

  return (
    <DigiCareDrawer>
      <MPatientDetails />
    </DigiCareDrawer>
  );
};
