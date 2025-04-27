import { IndividualSessionData } from "@/shared/types/fetchData.types";

export interface PatientScheduleProps {
    individualSession: IndividualSessionData[];
    groupSessions: [];
    patientId: number;
}