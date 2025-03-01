import PatientsList from "@widgets/adminPageWidgets/patientsList/ui/patientsList";
import { Divider } from 'primereact/divider';
import AddPatient from "@widgets/adminPageWidgets/addPatient/ui/addPatient";


const PatientsPage = () => {
    return (
        <div className={"wrapper"}>
            <AddPatient/>
            <Divider className={"my-5"}/>
            <PatientsList/>
        </div>
    );
};

export default PatientsPage;