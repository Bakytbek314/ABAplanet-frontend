import AddSchedule from "@/widgets/adminPageWidgets/addSchedule/ui/addSchedule";
import Schedule from "@/widgets/adminPageWidgets/schedule/ui/schedule";
import { Divider } from "primereact/divider";


const SchedulePage = () => {
    return (
        <div className="wrapper">
            <AddSchedule/>
            <Divider className={"my-5"}/>
            <Schedule/>
        </div>
    );
};

export default SchedulePage;