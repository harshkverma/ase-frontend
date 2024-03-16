import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { routesName } from "../../router/RoutesList";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { useSignInFormStye } from "./style";

export const SignInForm = () => {
  const { t } = useTranslation();
  const { classes } = useSignInFormStye();
  const { setIsSignedIn, setEmail, getAuthenticated } = React.useContext(
    AppContext
  ) as ContextProps;
  const [email, updateEmail] = React.useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (getAuthenticated(email)) {
      setEmail(email);
      event.preventDefault();
      // const data = new FormData(event.currentTarget)
      setIsSignedIn(true);
    }
  };

  return (
    <Grid className="signin-form-grid">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={classes.signInFormGrid}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("registration.signin")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate={false}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label={t("registration.form.email")}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => updateEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("registration.form.password")}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("registration.form.remember_me")}
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t("registration.signin")}
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  {t('registration.form.forget_password')}
                </Link> */}
              </Grid>
              <Grid item>
                <Link href={routesName.signup} variant="body2">
                  {t("registration.form.signup_message")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};
