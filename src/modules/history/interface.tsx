import { RealTimeRecordProps } from "../homepage/realTimeCards/interface";

export interface IDigicareHistory {
    _id: string;
    timestamp: Date;
    record: RealTimeRecordProps[];
}