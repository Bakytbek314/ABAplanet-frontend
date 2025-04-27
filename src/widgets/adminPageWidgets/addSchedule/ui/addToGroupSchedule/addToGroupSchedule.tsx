"use client";
import { useEffect, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { useGroupSessionStore } from "@/shared/store/useGroupSessionsStore";
import { usePatientsStore } from "@/shared/store/usePatientsStore";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";
import { addPatientToGroup } from "../../api/addPatientToGroup";
import { addSpecialistToGroup } from "../../api/addSpecialitToGroup";
import Button from "@/shared/ui/button/button";
import { useSpecialistScdulesStore } from "@/shared/store/useSpecialistScdulesStore";

const AddToGroupSchedule = () => {
  const { specialists, fetchSpecialists } = useSpecialistsStore();
  const { patients, fetchPatients } = usePatientsStore();
  const { fetchSpecialist } = useSpecialistScdulesStore();
  const { groupSession, fetchGroupSession } = useGroupSessionStore();

  const [isPatient, setIsPatient] = useState<boolean>(true);
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(
    null
  );
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [specialistToGroupFormData, setSpecialistToGroupFormData] = useState({
    specialistId: 0,
    sessionId: 0,
  });
  const [patientToGroupFormData, setPatientToGroupFormData] = useState({
    patientId: 0,
    sessionId: 0,
  });

  const handleSpecialistChange = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setSpecialistToGroupFormData({
      ...specialistToGroupFormData,
      specialistId: id,
    });
  };

  const handlePatientChange = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setPatientToGroupFormData({
      ...patientToGroupFormData,
      patientId: id,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    isPatient
      ? await addPatientToGroup(patientToGroupFormData)
      : await addSpecialistToGroup(specialistToGroupFormData);

    if (specialistToGroupFormData.specialistId) {
      await fetchSpecialist(specialistToGroupFormData.specialistId);
    }

    setSpecialistToGroupFormData({
      sessionId: 0,
      specialistId: 0,
    });

    setSelectedGroup(null);
    setSelectedPatient(null);
    setSelectedSpecialist(null);
  };

  useEffect(() => {
    fetchSpecialists();
    fetchPatients();
    fetchGroupSession();
  }, []);

  return (
    <form className="p-4 flex gap-4 relative" onSubmit={handleSubmit}>
      <div className="flex flex-column gap-2">
        <div className="flex align-items-center">
          <RadioButton
            inputId="ingredient1"
            name="specialist"
            value={true}
            onChange={(e) => setIsPatient(e.value)}
            checked={isPatient === true}
          />
          <label htmlFor="specialist" className="ml-2">
            Добавить пациента
          </label>
        </div>
        <div className="flex align-items-center">
          <RadioButton
            inputId="ingredient1"
            name="patient"
            value={false}
            onChange={(e) => setIsPatient(e.value)}
            checked={isPatient === false}
          />
          <label htmlFor="patient" className="ml-2">
            Добавить специалиста
          </label>
        </div>
      </div>
      <div className="flex flex-column gap-2">
        {isPatient ? (
          <Dropdown
            checkmark={true}
            value={selectedPatient}
            onChange={(e) => {
              handlePatientChange(e), setSelectedPatient(e.value);
            }}
            options={patients}
            optionLabel="firstName"
            placeholder="Выберите пациентов"
            className="p-2"
          />
        ) : (
          <Dropdown
            checkmark={true}
            value={selectedSpecialist}
            onChange={(e) => {
              handleSpecialistChange(e), setSelectedSpecialist(e.value);
            }}
            options={specialists}
            optionLabel="firstName"
            placeholder="Выберите специалиста"
            className="p-2"
          />
        )}
        <Dropdown
          checkmark={true}
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.value);
            isPatient
              ? setPatientToGroupFormData({
                  ...patientToGroupFormData,
                  sessionId: e.value.id,
                })
              : setSpecialistToGroupFormData({
                  ...specialistToGroupFormData,
                  sessionId: e.value.id,
                });
          }}
          options={groupSession}
          optionLabel="streamNumber"
          placeholder="Выберите поток"
          className="p-2"
        />
      </div>
      <Button color="green" type="submit" className="absolute right-0 bottom-0">
        Создать
      </Button>
    </form>
  );
};

export default AddToGroupSchedule;
