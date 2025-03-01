import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PatientScheduleProps } from "./patientSchedule.props";

const PatientSchedule = (props: PatientScheduleProps) => {
  const { individualSession, groupSessions, patientId } = props;

  return (
    <div>
      <DataTable
        value={individualSession}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
        header={"Индивидуальные занятия"}
        className="mt-4"
      >
        <Column field="day" header="День" className="py-2"></Column>
        <Column field="startTime" header="Начало"></Column>
        <Column field="endTime" header="Конец"></Column>
        <Column field="specialist.specialization" header="Специальность"></Column>
      </DataTable>

      <DataTable
        value={groupSessions}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
        header={"Групповые занятия"}
        className="mt-4"
      >
        <Column field="day" header="День" className="py-2"></Column>
        <Column field="firstStageStartTime" header="Начало"></Column>
        <Column field="secondStageEndTime" header="Конец"></Column>
      </DataTable>
    </div>
  );
};

export default PatientSchedule;
