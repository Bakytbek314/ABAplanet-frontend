"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PatientScheduleProps } from "./patientSchedule.props";
import { Message } from "primereact/message";

const PatientSchedule = (props: PatientScheduleProps) => {
  const { individualSession, groupSessions } = props;

  if (individualSession.length === 0 && groupSessions.length === 0) {
    return (
      <Message text="Занятий нет!" className="p-2 mt-3"/>
    )
  }

  return (
    <div>
      {individualSession.length > 0 && (
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
          <Column
            field="specialist.specialization"
            header="Специальность"
          ></Column>
        </DataTable>
      )}

      {groupSessions.length > 0 && (
        <DataTable
          value={groupSessions}
          stripedRows
          tableStyle={{ minWidth: "5rem" }}
          header={"Групповые занятия"}
          className="mt-4"
        >
          <Column field="day" header="День" className="py-2"></Column>
          <Column field="firstStageStartTime" header="Начало"></Column>
          <Column field="secondStageEndTime" header="Конец"></Column>
        </DataTable>
      )}
    </div>
  );
};

export default PatientSchedule;
