"use client";
import { useSpecialistScdulesStore } from "../store/useSpecialistScdulesStore";
import styles from "./schedule.module.scss";
import ChangeSpecialist from "./changeSpecialist/changeSpecialist";

const Schedule = () => {
  const { specialistId, individual, group, mainGroup } =
    useSpecialistScdulesStore();

  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  const getSession = (day: string, time: string) => {
    const individualSession = individual.find(
      (ses) => ses.day === day && ses.startTime === time
    );

    const groupSession = group.find((group) => {
      const [startDay, endDay] = group.day.split("-");
      const dayIndex = days.indexOf(day);
      const startIndex = days.indexOf(startDay);
      const endIndex = days.indexOf(endDay);

      if (dayIndex < startIndex || dayIndex > endIndex) return false;

      return (
        group.firstStageEndTime <= time && group.secondStageStartTime > time
      );
    });

    const mainGroupSession =
      mainGroup &&
      mainGroup.find((group) => {
        const [startDay, endDay] = group.day.split("-");
        const dayIndex = days.indexOf(day);
        const startIndex = days.indexOf(startDay);
        const endIndex = days.indexOf(endDay);

        if (dayIndex < startIndex || dayIndex > endIndex) return false;

        return time === group.firstStageStartTime || time === group.secondStageStartTime;
      });

    return individualSession || groupSession || mainGroupSession || null;
  };

  return (
    <div className={styles.container}>
      <ChangeSpecialist />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Время</th>
            {days.map((day) => (
              <th key={day} className={styles.day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className={styles.time}>{time}</td>
              {days.map((day, index) => {
                const session = getSession(day, time);
                return (
                  <td key={index} className={styles.session}>
                    {session
                      ? "patient" in session
                        ? `${session.patient.firstName} ${session.patient.lastName}`
                        : session.firstStageStartTime
                        ? `Группа Поток-${session.streamNumber}`
                        : `Группа Поток-1`
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
