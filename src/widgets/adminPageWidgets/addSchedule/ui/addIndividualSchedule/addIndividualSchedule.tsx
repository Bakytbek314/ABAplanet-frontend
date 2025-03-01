import { useState, useEffect } from "react";
import { DropdownChangeEvent, Dropdown } from "primereact/dropdown";
import { addSceduleFormDays } from "@/shared/constants/addSceduleForm";
import { usePatientsStore } from "@/shared/store/usePatientsStore";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";
import { addIndividualSchedule } from "../../api/addIndividualSchedule";
import { scheduleTime } from "@/shared/constants/scheduleTime";
import Button from "@/shared/ui/button/button";

const AddIndividualSchedule = () => {
  const { specialists, fetchSpecialists } = useSpecialistsStore();
  const { patients, fetchPatients } = usePatientsStore();

  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(
    null
  );
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);

  const [individualFormData, setIndividualFormData] = useState({
    patientId: 0,
    specialistId: 0,
    startTime: "",
    endTime: "",
    day: "",
  });

  const handleSpecialistChange = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setIndividualFormData({
      ...individualFormData,
      specialistId: id,
    });
  };

  const handlePatientChange = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setIndividualFormData({
      ...individualFormData,
      patientId: id,
    });
  };

  const handleDayChange = (e: DropdownChangeEvent) => {
    const { day } = e.value;
    setIndividualFormData({
      ...individualFormData,
      day: day,
    });
  };

  const handleStartTimeChange = (e: DropdownChangeEvent) => {
    const { time } = e.value;
    setIndividualFormData({
      ...individualFormData,
      startTime: time,
    });
  };

  const handleEndTimeChange = (e: DropdownChangeEvent) => {
    const { time } = e.value;
    setIndividualFormData({
      ...individualFormData,
      endTime: time,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addIndividualSchedule(individualFormData);

    setIndividualFormData({
      patientId: 0,
      specialistId: 0,
      startTime: "",
      endTime: "",
      day: "",
    });
  };

  useEffect(() => {
    fetchSpecialists();
    fetchPatients();
  }, []);

  return (
    <form className="p-4 flex gap-4 relative" onSubmit={handleSubmit}>
      <div className="flex grid gap-2">
        <Dropdown
          checkmark={true}
          value={selectedSpecialist}
          onChange={(e) => {
            handleSpecialistChange(e), setSelectedSpecialist(e.value);
          }}
          options={specialists}
          optionLabel="firstName"
          placeholder="Выберите специалиста"
          className="p-2 col-3"
        />
        <Dropdown
          checkmark={true}
          value={selectedPatient}
          onChange={(e) => {
            handlePatientChange(e), setSelectedPatient(e.value);
          }}
          options={patients}
          optionLabel="firstName"
          placeholder="Выберите пациента"
          className="p-2 col-3"
        />
        <Dropdown
          checkmark={true}
          value={selectedDay}
          onChange={(e) => {
            setSelectedDay(e.value), handleDayChange(e);
          }}
          options={addSceduleFormDays}
          optionLabel="day"
          placeholder="Выберите день"
          className="p-2 col-3"
        />
        <Dropdown
          placeholder={"Время начало"}
          onChange={(e) => {
            handleStartTimeChange(e), setSelectedStartTime(e.value);
          }}
          options={scheduleTime}
          optionLabel="time"
          value={selectedStartTime}
          className="p-2 col-3"
        />
        <Dropdown
          placeholder={"Время окончяние"}
          onChange={(e) => {
            handleEndTimeChange(e), setSelectedEndTime(e.value);
          }}
          options={scheduleTime}
          optionLabel="time"
          value={selectedEndTime}
          className="p-2 col-3"
        />
      </div>
      <Button color="green" type="submit" className="absolute right-0 bottom-0">
        Создать
      </Button>
    </form>
  );
};

export default AddIndividualSchedule;
