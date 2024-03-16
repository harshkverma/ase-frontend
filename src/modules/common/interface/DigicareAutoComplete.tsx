import { SyntheticEvent } from "react";

export interface DigicareAutoCompleteProps {
    data: DigicareAutoCompleteDataProps[] | undefined; 
    className?: string;
    placeHolder?: string;
    handlePatientSelect: (value: DigicareAutoCompleteDataProps | null) => void;
}

export interface DigicareAutoCompleteDataProps {
    label: string;
    value: string | number;
    firstLetter?: string;
}