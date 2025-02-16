export interface PatientScheduleProps {
    individualSession: [
        {
            id: number,
            day: string,
            startTime: string,
            endTime: string,
            specialistId: number,
            patientId: number
        }
    ];
    groupSessions: [
        {
            id: number,
            day: string,
            startTime: string,
            endTime: string,
            monthlyFee: number
        }
    ]
}