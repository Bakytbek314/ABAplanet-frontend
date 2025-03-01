import SpecialistsList from "@widgets/adminPageWidgets/specialistsList/ui/specialistsList";
import AddSpecialist from "@widgets/adminPageWidgets/addSpepicialist/ui/addSpecialist";
import {Divider} from "primereact/divider";

const SpecialistsPage = () => {
    return (
        <div className={"wrapper"}>
            <AddSpecialist/>
            <Divider className={"my-5"}/>
            <SpecialistsList/>
        </div>
    );
};

export default SpecialistsPage;