import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { SpecialistScheduleProps } from "./specialistSchedule.props";
import { Message } from "primereact/message";

const SpecialistSchedule = (props: SpecialistScheduleProps) => {
  const { groupSessions, individualSession } = props;

  if ((individualSession && individualSession.length === 0) && (groupSessions && groupSessions.length === 0)) {
    return <Message text="Занятий нет!" className="p-2 mt-3" />;
  }

  return (
    <>
      {individualSession && individualSession.length > 0 && (
        <DataTable
          value={individualSession}
          stripedRows
          tableStyle={{ minWidth: "5rem" }}
          header={"Индивидуальные занятия"}
          className="mt-4"
        >
          <Column field="day" header="День" className="py-2"></Column>
          <Column field="startTime" header="Начало"></Column>
          <Column field="endTime" header="Конец"></Column>
          <Column field="patient.firstName" header="Пациент"></Column>
        </DataTable>
      )}

      {groupSessions && groupSessions.length > 0 && (
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
      )}
    </>
  );
};

export default SpecialistSchedule;
