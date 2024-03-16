import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  patientRealTimeData,
  realTimeData,
} from "../../../dummyData/realTimeData";
import { Grid } from "@mui/material";
import { digicareConfig } from "../../../assets/constants/config";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { capitalizeSentence } from "../../common/helper/string";
import DigicareAlertDialog from "../../common/components/DigiCareDialogueBox";
import { RealTimeDataProps, RealTimeRecordProps } from "./interface";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { EUserRole } from "../../avatarPopOverContent/interface";
import { RealTimeRecordCard } from "./realTimeRecordCard";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../../common/components/DigicareAccordian";
import { DigiCareIcons } from "../../../assets/icon";
import { DigiCareIconEnum } from "../../../assets/icon/interface";
import { dummyPatientsList } from "../../../dummyData/patientsList";

export const RealTimeCards = () => {
  const { t } = useTranslation();
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);
  const { user } = React.useContext(AppContext) as ContextProps;
  const [realData, setRealData] = React.useState<RealTimeDataProps[]>();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [dangerRealTimeData, setDamgerRealTimeData] = React.useState<
    Array<string>
  >([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const getPatientRealTimeDetails = (patientDummyIds: Array<string>) => {
    var patientsRealTimeData = patientDummyIds.map((pID) => {
      return realTimeData.find((d) => d.patient_id === pID);
    });
    return patientsRealTimeData as RealTimeDataProps[];
  };

  React.useEffect(() => {
    if (user?.role === EUserRole.patient) setRealData(patientRealTimeData);
    else if (user?.role === EUserRole.doctor) {
      dummyPatientsList.map((dummyDoctor) => {
        if (dummyDoctor.doctor_id === user._id) {
          setRealData(getPatientRealTimeDetails(dummyDoctor.patient_ids));
        }
      });
    }
  }, []);

  const validateData = (
    data: RealTimeRecordProps,
    realTimePatientId: string
  ) => {
    const dataMinMax = data.reading.split("/");
    if (dataMinMax.length === 1) {
      if (
        Number(dataMinMax) > Number(data.min_value) &&
        Number(dataMinMax) < Number(data.max_value)
      ) {
        return "valid-real-time-data";
      } else {
        dangerRealTimeData.indexOf(realTimePatientId) < 0 &&
          setDamgerRealTimeData((prevState) => {
            prevState.push(realTimePatientId);
            return prevState;
          });
        return "invalid-real-time-data";
      }
    } else {
      if (
        Number(dataMinMax[0]) > Number(data.min_value?.split('/')[0]) && Number(dataMinMax[1]) > Number(data.min_value?.split('/')[1]) &&
        Number(dataMinMax[0]) < Number(data.max_value?.split('/')[0]) && Number(dataMinMax[1]) < Number(data.max_value?.split('/')[1])
      ) {
        return "valid-real-time-data";
      } else {
        dangerRealTimeData.indexOf(realTimePatientId) < 0 &&
          setDamgerRealTimeData((prevState) => {
            prevState.push(realTimePatientId);
            return prevState;
          });
        return "invalid-real-time-data";
      }
    }
  };

  return (
    <Grid className="real-time-data-grid">
      {realData?.map((rtData) => {
        return realData.length <= 1 ? (
          <>
            <Typography>
              <strong>Patient Id:</strong> {rtData.patient_id}
              <p>
                ______________________________________________________________________________
              </p>
            </Typography>
            <Grid className="real-time-record-grid">
              {rtData.records?.map((data: RealTimeRecordProps) => {
                return (
                  <RealTimeRecordCard
                    data={data}
                    validateClassName={validateData(data, rtData.patient_id)}
                    setIsAlertOpen={setIsAlertOpen}
                    isRecord={user?.role === EUserRole.patient}
                  />
                );
              })}
            </Grid>
          </>
        ) : (
          <>
            <DigicareAccordion
              expanded={expanded === rtData.patient_id}
              onChange={handleChange(rtData.patient_id)}
              className={
                dangerRealTimeData.indexOf(rtData.patient_id) >= 0
                  ? "pateint-record-danger-accordian"
                  : "pateint-record-accordian"
              }
            >
              <DigicareAccordionSummary
                aria-controls={`${rtData.patient_id}-pateint-record-content`}
                id={`${rtData.patient_id}-pateint-record-header`}
                className="pateint-records-list-accordian-summary"
              >
                <Typography>{rtData.patient_id}</Typography>
                <DigiCareIcons iconFor={DigiCareIconEnum.sosCall} />
              </DigicareAccordionSummary>
              <DigicareAccordionDetails>
                {rtData.records.map((record: RealTimeRecordProps) => (
                  <RealTimeRecordCard
                    data={record}
                    validateClassName={validateData(record, rtData.patient_id)}
                    setIsAlertOpen={setIsAlertOpen}
                    isRecord={user?.role === EUserRole.patient}
                  />
                ))}
              </DigicareAccordionDetails>
            </DigicareAccordion>
          </>
        );
      })}
      {isAlertOpen && (
        <DigicareAlertDialog
          isOpen={isAlertOpen}
          handleClose={() => setIsAlertOpen(false)}
          title={t("real_time_dashboard.record.alert.title")}
          okButtonText={t("real_time_dashboard.record.alert.okButtonTitle")}
          content={t("real_time_dashboard.record.alert.content")}
        />
      )}
    </Grid>
  );
};
