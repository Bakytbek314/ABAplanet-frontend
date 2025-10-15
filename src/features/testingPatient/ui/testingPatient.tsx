"use client";
import { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";
import { postTestingPatient } from "../api/postTestingPatient";
import { Button } from "primereact/button";

const TestingPatient = ({ patientId }: any) => {
  const { currentUser } = useCurrentUser();

  const [formData, setFormData] = useState({
    patientId,
    progress: "",
    testResults: null,
  });

  const handleSubmin = async (e: React.FormEvent) => {
    e.preventDefault();
    await postTestingPatient(formData, currentUser?.id as number);
    setFormData({
      progress: "",
      testResults: null,
      patientId,
    });
  };

  return (
    <form className="p-4" onSubmit={handleSubmin}>
      <div>
        <label>Результаты тестирование</label>
        <InputNumber
          maxLength={3}
          max={100}
          className="pt-1"
          value={formData.testResults}
          onChange={(e) =>
            setFormData({ ...formData, testResults: e.value as null })
          }
        />
      </div>
      <div className="mt-2">
        <label>Описание тестирование</label>
        <InputText
          className="p-1 mt-1"
          value={formData.progress}
          onChange={(e) =>
            setFormData({ ...formData, progress: e.target.value })
          }
        />
      </div>
      <Button className="p-2 mt-2" type="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default TestingPatient;
