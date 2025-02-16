"use client";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { usePatientsStore } from "@/shared/store/usePatientsStore";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";
import { addSchedule } from "@/features/api/addSchedule";
import { RadioButton } from "primereact/radiobutton";

const AddSchedule = () => {
  const { patients, fetchPatients } = usePatientsStore();
  const { specialists, fetchSpecialists } = useSpecialistsStore();

  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(
    null
  );
  const [selectedPatient, setSelectedPatient] = useState<string | null>(
    null
  );
  const [isGroupSession, setIsGroupSession] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    patientId: 1,
    specialistId: 1,
    startTime: "",
    endTime: "",
    day: "",
  });

  const handlePatientChange = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setFormData({ ...formData, patientId: id })
  }

  const handleSpecialistChange = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setFormData({ ...formData, specialistId: id })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addSchedule(formData);
    setFormData({
      patientId: 0,
      specialistId: 0,
      startTime: "",
      endTime: "",
      day: "",
    });
  };

  return (
    <form className="flex gap-4 mt-2">
      <div className="flex align-items-center">
        <RadioButton
          inputId="individual"
          name="session"
          value="Individual"
          onChange={() => setIsGroupSession(false)}
          checked={isGroupSession === false}
        />
        <label htmlFor="individual" className="ml-2">
          Индивидуальное
        </label>
      </div>

      <div className="flex align-items-center">
        <RadioButton
          inputId="group"
          name="session"
          value="Group"
          onChange={() => setIsGroupSession(true)}
          checked={isGroupSession === true}
        />
        <label htmlFor="group" className="ml-2">
          Групповое
        </label>
      </div>

      <Dropdown
        checkmark={true}
        value={selectedPatient}
        onChange={handlePatientChange}
        options={patients}
        optionLabel="firstName"
        placeholder="Выберите пациента"
        className="p-2"
      />
      {isGroupSession && (
        <Dropdown
          checkmark={true}
          value={selectedSpecialist}
          onChange={}
          options={specialists}
          optionLabel="name"
          placeholder="Выберите специалиста"
          className="p-2"
        />
      )}
    </form>
  );
};

export default AddSchedule;
