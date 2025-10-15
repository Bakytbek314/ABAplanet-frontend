import PatientChart from "@/entities/patientChart/ui/patientChart";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";
import { PatientsData } from "@/shared/types/fetchData.types";

const Chart = () => {
    const { currentUser } = useCurrentUser();
    return (
        <section className="mt-4">
            <PatientChart developmentResults={(currentUser as PatientsData)?.developmentResults}/>
        </section>
    )
};

export default Chart;