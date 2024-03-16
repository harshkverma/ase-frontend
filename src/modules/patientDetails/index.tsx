import { Grid, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { History } from "../history";

export const MPatientDetails = () => {
  const { patient_id } = useParams();

  return (
    <Grid>
      <Typography>Patient Id: {patient_id}</Typography>
      {/* patient-profile */}
      {/* patient-history */}
      <Typography variant="h3">History</Typography>
      <History />
    </Grid>
  );
};
