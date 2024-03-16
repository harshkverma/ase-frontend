export interface RealTimeDataProps {
    patient_id: string;
    records: RealTimeRecordProps[];
}

export interface RealTimeRecordProps {
    _id: string;
    name: string;
    reading: string;
    unit: string;
    img?: string;
    min_value?: string;
    max_value?: string;
}

export interface RealTimeRecordCardProps {
    data: RealTimeRecordProps;
    validateClassName: string;
    setIsAlertOpen: (value: boolean) => void;
    isRecord?: boolean;
}