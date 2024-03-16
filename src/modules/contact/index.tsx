import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.scss";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <Grid className="contact-us-grid">
      <Typography variant="h3" className="contact-us-title">
        {t("contact.title")}
      </Typography>
      <div
        className="contact-us-content"
        dangerouslySetInnerHTML={{ __html: t("contact.content") }}
      />
    </Grid>
  );
};
