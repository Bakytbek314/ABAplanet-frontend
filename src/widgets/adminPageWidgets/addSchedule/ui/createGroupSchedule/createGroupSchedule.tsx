import { scheduleTime } from "@/shared/constants/scheduleTime";
import Button from "@/shared/ui/button/button";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";
import { createGroup } from "../../api/createGroup";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";

const CreateGroupSchedule = () => {
    const { specialists, fetchSpecialists } = useSpecialistsStore();
    
  const [createGroupFormData, setCreateGroupFormData] = useState({
    streamNumber: 0,
    firstStageStartTime: "",
    firstStageEndTime: "",
    secondStageStartTime: "",
    secondStageEndTime: "",
    mainSpecialistId: 0 || null,
  });
  const [selectedFirstStageStartTime, setSelectedFirstStageStartTime] =
    useState<string | null>(null);
  const [selectedFirstStageEndTime, setSelectedFirstStageEndTime] = useState<
    string | null
  >(null);
  const [selectedSecondStageStartTime, setSelectedSecondStageStartTime] =
    useState<string | null>(null);
  const [selectedSecondStageEndTime, setSelectedSecondStageEndTime] = useState<
    string | null
  >(null);
  const [selectedMainSpecialist, setSelectedMainSpecialist] = useState<
    string | null
  >(null);

  const handleGroupStream = (e: InputNumberValueChangeEvent) => {
    setCreateGroupFormData({ ...createGroupFormData, streamNumber: e.value ?? 0 });
  };
  const handleFirstStageStartTime = (e: DropdownChangeEvent) => {
    const { time } = e.value;
    setCreateGroupFormData({
      ...createGroupFormData,
      firstStageStartTime: time,
    });
  };
  const handleFirstStageEndTime = (e: DropdownChangeEvent) => {
    const { time } = e.value;
    setCreateGroupFormData({ ...createGroupFormData, firstStageEndTime: time });
  };
  const handleSecondStageStartTime = (e: DropdownChangeEvent) => {
    const { time } = e.value;
    setCreateGroupFormData({
      ...createGroupFormData,
      secondStageStartTime: time,
    });
  };
  const handleSecondStageEndTime = (e: DropdownChangeEvent) => {
    const { time } = e.value;
    setCreateGroupFormData({
      ...createGroupFormData,
      secondStageEndTime: time,
    });
  };
  const handleMainSpecialist = (e: DropdownChangeEvent) => {
    const { id } = e.value;
    setCreateGroupFormData({ ...createGroupFormData, mainSpecialistId: id });
  };

  const handleSubmit = (e: React.FormEvent) => {
    createGroup(createGroupFormData);
  };
  
  return (
    <form className="p-4 relative" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Dropdown
          placeholder={"Время начало первого этапа"}
          onChange={(e) => {
            handleFirstStageStartTime(e),
              setSelectedFirstStageStartTime(e.value);
          }}
          options={scheduleTime}
          optionLabel="time"
          value={selectedFirstStageStartTime}
          className="p-2 col-4"
        />
        <Dropdown
          placeholder={"Время начало второго этапа"}
          onChange={(e) => {
            handleFirstStageEndTime(e), setSelectedFirstStageEndTime(e.value);
          }}
          options={scheduleTime}
          optionLabel="time"
          value={selectedFirstStageEndTime}
          className="p-2 col-4"
        />
        <Dropdown
          placeholder={"Время конец первого этапа"}
          onChange={(e) => {
            handleSecondStageStartTime(e),
              setSelectedSecondStageStartTime(e.value);
          }}
          options={scheduleTime}
          optionLabel="time"
          value={selectedSecondStageStartTime}
          className="p-2 col-4"
        />
        <Dropdown
          placeholder={"Время конец второго этапа"}
          onChange={(e) => {
            handleSecondStageEndTime(e), setSelectedSecondStageEndTime(e.value);
          }}
          options={scheduleTime}
          optionLabel="time"
          value={selectedSecondStageEndTime}
          className="p-2 col-4"
        />
        <Dropdown
          placeholder={"Выберите главного специалиста"}
          onChange={(e) => {
            handleMainSpecialist(e), setSelectedMainSpecialist(e.value);
          }}
          options={specialists}
          optionLabel="firstName"
          value={selectedMainSpecialist}
          className="p-2 col-4"
        />
        <InputNumber
          value={createGroupFormData.streamNumber}
          onValueChange={handleGroupStream}
          showButtons
          buttonLayout="horizontal"
          style={{ height: "40px" }}
          decrementButtonClassName="p-button-secondary"
          incrementButtonClassName="p-button-secondary"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          className="col-2"
        />
      </div>
      <Button color="green" type="submit" className="absolute bottom-0 right-0">
        Создать
      </Button>
    </form>
  );
};

export default CreateGroupSchedule;
