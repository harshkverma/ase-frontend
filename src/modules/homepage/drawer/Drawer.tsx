import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./Drawer.scss";
import { useTranslation } from "react-i18next";
import { DigicareDrawerProps } from "./interface";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesList, routesName } from "../../../router/RoutesList";
import styles from "../../../assets/styles/_variable.module.scss";
import { DigiCareTitle } from "../title/title";
import { DigicarePopOver } from "../../common/components/DigicarePopOver";
import { AvatarPopOverComp } from "../../avatarPopOverContent";
import { Avatar as ProfileAvatar, Typography } from "@mui/material";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { digicareConfig } from "../../../assets/constants/config";

export function DigiCareDrawer({ children }: DigicareDrawerProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = React.useContext(AppContext) as ContextProps;
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const location = useLocation();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${styles.navbarWidth})`,
          ml: `${styles.navbarWidth}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {t(
              RoutesList.find((route) => route.link === location.pathname)
                ?.name as string
            )}
          </Typography>
          <ProfileAvatar
            className="avatar-position"
            aria-describedby={id}
            onClick={handleClick}
            src={digicareConfig.webPort + user?.profile_pic}
          />
          <DigicarePopOver
            open={open}
            anchorEl={anchorEl}
            id={id}
            handleClose={handleClose}
          >
            <AvatarPopOverComp />
          </DigicarePopOver>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: styles.navbarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: styles.navbarWidth,
            boxSizing: "border-box",
            backgroundColor: styles.navbarTitleBackgroundColor,
            boxShadow: styles.generalBoxShadow,
            overflow: "hidden",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <DigiCareTitle />
        </Toolbar>
        <Divider />
        <div className="doctor-details" style={{ textAlign: "center" }}>
          <img
            src={`${digicareConfig.webPort}digicare-logo.png`}
            className="digicare-logo"
          />
        </div>

        <Divider />
        <List>
          {RoutesList.map((data) => {
            if (
              data.renderDrawerComponents &&
              (data.valid_role === "all" || data.valid_role === user?.role)
            )
              return (
                <ListItem key={t(data.name)} disablePadding>
                  <ListItemButton onClick={() => navigate(data.link)}>
                    <ListItemText
                      sx={{
                        "& .MuiListItemText-primary": { fontSize: "1.6rem" },
                      }}
                      className="navbar-router-text"
                    >
                      {t(data.name)}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            else return <></>;
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
