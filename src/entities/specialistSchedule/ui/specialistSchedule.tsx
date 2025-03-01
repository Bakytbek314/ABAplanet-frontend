import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { SpecialistScheduleProps } from "./specialistSchedule.props";

const SpecialistSchedule = (props: SpecialistScheduleProps) => {
  const { groupSessions, individualSession } = props;

  return (
    <>
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
        <Column field="patient.firstName" header="Пациент"></Column>
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
    </>
  );
};

export default SpecialistSchedule;
