import Typography from "@mui/material/Typography";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../common/components/DigicareAccordian";
import React from "react";
import { historyData } from "../../dummyData/histroy";
import { IDigicareHistory } from "./interface";
import { capitalizeSentence } from "../common/helper/string";
import './style.scss';

export const History = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {historyData.map((data: IDigicareHistory) => {
        return (
          <DigicareAccordion
            expanded={expanded === data._id}
            onChange={handleChange(data._id)}
          >
            <DigicareAccordionSummary
              aria-controls={`${data._id}-content`}
              id={`${data._id}-header`}
            >
              <Typography>{data.timestamp.toLocaleString()}</Typography>
            </DigicareAccordionSummary>
            <DigicareAccordionDetails>
              <Typography className="history-record-text-wrapper">
                {data.record.map((readings) => (
                  <Typography variant="body1">
                    <span className="history-record-text-title">{capitalizeSentence(readings.name.split("_").join(" "))}:</span>{" "}
                    {readings.reading}
                    {readings.unit}
                  </Typography>
                ))}
              </Typography>
            </DigicareAccordionDetails>
          </DigicareAccordion>
        );
      })}
    </>
  );
};
