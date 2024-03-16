import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";
import {
  DigicareAutoCompleteDataProps,
  DigicareAutoCompleteProps,
} from "../interface/DigicareAutoComplete";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function DigiCareAutocomplete({
  data,
  handlePatientSelect,
  className,
  placeHolder,
}: DigicareAutoCompleteProps) {
  const options = data?.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      className={className}
      id="grouped-demo"
      options={
        options?.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter)) ||
        []
      }
      groupBy={(option) => option.firstLetter || ""}
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={placeHolder} />}
      onChange={(
        event: any,
        newValue: DigicareAutoCompleteDataProps | null
      ) => {
        handlePatientSelect(newValue);
      }}
    />
  );
}
