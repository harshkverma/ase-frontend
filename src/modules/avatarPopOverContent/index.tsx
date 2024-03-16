import { Button, Grid, Typography } from "@mui/material";
import { RoutesList } from "../../router/RoutesList";
import { IRoutesPath } from "../../router/interface";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { digicareConfig } from "../../assets/constants/config";

export const AvatarPopOverComp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, setIsSignedIn } = useContext(AppContext) as ContextProps;

  // const getRoutesLink = () => {
  //   return RoutesList.map((routes: IRoutesPath) => {
  //     return routes.renderDrawerComponents ? (
  //       <></>
  //     ) : (
  //       <Button
  //         key={routes.id}
  //         variant="text"
  //         onClick={() => navigate(routes.link)}
  //       >
  //         {t(routes.name)}
  //       </Button>
  //     );
  //   });
  // };

  return (
    <Grid>
      <Stack className="avatar-in-pop-over">
        <Avatar
          alt="Remy Sharp"
          src={digicareConfig.webPort + user?.profile_pic}
          sx={{ width: 100, height: 100 }}
        />
      </Stack>
      <Stack className="avatar-pop-over-details-grid">
        <Typography variant="h5" className="avatar-pop-over-details">
          <p>{"User: "}</p>
          <p>{user?.user_name}</p>
        </Typography>
        <Typography variant="h5" className="avatar-pop-over-details">
          <p>{"Email: "}</p>
          <p>{user?.email}</p>
        </Typography>
        <Typography variant="h5" className="avatar-pop-over-details">
          <p>{"Contact Number: "}</p>
          <p>{user?.contact_number}</p>
        </Typography>
      </Stack>
      <Stack className="avatar-pop-over-buttons-grid">
        {/* {getRoutesLink()} */}
        <Button variant="text" onClick={() => setIsSignedIn(false)}>
          {t("button.logout")}
        </Button>
      </Stack>
    </Grid>
  );
};
