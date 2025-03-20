"use client";
import { useSpecialistScdulesStore } from "../store/useSpecialistScdulesStore";
import styles from "./schedule.module.scss";
import ChangeSpecialist from "./changeSpecialist/changeSpecialist";
import { useRef } from "react";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import {
  daysForScheduleTable,
  timesForScheduleTable,
} from "@/shared/constants/scheduleTime";
import { deleteIndividualSession } from "../api/deleteIndividualSession";

const Schedule = () => {
  const { individual, group, mainGroup } =
    useSpecialistScdulesStore();

  const getSession = (day: string, time: string) => {
    const individualSession = individual.find(
      (ses) => ses.day === day && ses.startTime === time
    );

    const groupSession = group.find((group) => {
      const [startDay, endDay] = group.day.split("-");
      const dayIndex = daysForScheduleTable.indexOf(day);
      const startIndex = daysForScheduleTable.indexOf(startDay);
      const endIndex = daysForScheduleTable.indexOf(endDay);

      if (dayIndex < startIndex || dayIndex > endIndex) return false;

      return (
        group.firstStageEndTime <= time && group.secondStageStartTime > time
      );
    });

    const mainGroupSession =
      mainGroup &&
      mainGroup.find((group) => {
        const [startDay, endDay] = group.day.split("-");
        const dayIndex = daysForScheduleTable.indexOf(day);
        const startIndex = daysForScheduleTable.indexOf(startDay);
        const endIndex = daysForScheduleTable.indexOf(endDay);

        if (dayIndex < startIndex || dayIndex > endIndex) return false;

        return (
          time === group.firstStageStartTime ||
          time === group.secondStageStartTime
        );
      });

    return individualSession || groupSession || mainGroupSession || null;
  };
  const toast = useRef<Toast>(null);

  const deleteSession = async (sessionId: number) => {
    try {
      deleteIndividualSession(sessionId);
      toast.current?.show({
        severity: "success",
        summary: "Deleted",
        detail: "Занятие удалено",
        life: 3000,
      });
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Ошибка при удалении занятия",
        life: 3000,
      });
      console.error("Error deleting session:", error);
    }
  };

  const confirm = (
    e: React.MouseEvent<HTMLTableCellElement>,
    sessionId: number,
    firstName: string
  ) => {
    confirmPopup({
      target: e.currentTarget,
      message: `Вы хотите убрать ${firstName} из расписания`,
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger p-1 m-2",
      acceptLabel: "Да",
      accept: () => deleteSession(sessionId),
      rejectLabel: "Отмена",
      rejectClassName: "p-1 m-2",
    });
  };

  return (
    <div className={styles.container}>
      <Toast ref={toast} />
      <ConfirmPopup className="p-2" />
      <ChangeSpecialist />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Время</th>
            {daysForScheduleTable.map((day) => (
              <th key={day} className={styles.day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timesForScheduleTable.map((time) => (
            <tr key={time}>
              <td className={styles.time}>{time}</td>
              {daysForScheduleTable.map((day, index) => {
                const session = getSession(day, time);
                return (
                  <td
                    key={index}
                    className={styles.session}
                    onDoubleClick={(e) => {
                      if (session && "patient" in session) {
                        confirm(e, session.id, session.patient.firstName);
                      }
                    }}
                  >
                    {session
                      ? "patient" in session
                        ? `${session.patient.firstName} ${session.patient.lastName}`
                        : session.firstStageStartTime
                        ? `Группа Поток-${session.streamNumber}`
                        : "0"
                      : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
