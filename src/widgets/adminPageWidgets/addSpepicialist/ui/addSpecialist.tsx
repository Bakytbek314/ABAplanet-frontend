"use client";
import React, { useRef, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from "primereact/inputtext";
import {
  addSpecialistForm,
  specializations,
} from "@/shared/constants/addSpecialistForm";
import { addSpecialist } from "../api/addSpecialist";
import { AddSpecialistFormData } from "@/shared/types/fetchData.types";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import TextType from "@shared/ui/textType/textType";
import Button from "@/shared/ui/button/button";
import styles from "./addSpecialist.module.scss";

const AddSpecialist = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);

  const [formData, setFormData] = useState<AddSpecialistFormData>({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    phoneNumber: "",
    specialization: "",
    salaryPercent: 50,
  });

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as AddSpecialistFormData)
    );
  };

  const handleSpecializationChange = (e: DropdownChangeEvent) => {
    const { name } = e.value;
    setFormData({ ...formData, specialization: name });
  };

  const handleSalaryPercentChange = (e: InputNumberValueChangeEvent) => {
    setFormData({ ...formData, salaryPercent: e.value ?? 50 });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addSpecialist(formData);
    setFormData({
      firstName: "",
      lastName: "",
      login: "",
      password: "",
      phoneNumber: "",
      specialization: "",
      salaryPercent: 0,
    });
  };

  return (
    <Accordion activeIndex={null} expandIcon collapseIcon>
      <AccordionTab
        header={
          (
            <span className="flex align-items-center gap-2 p-2 w-full">
              <i
                className="pi pi-user-plus ml-3 mr-2"
                style={{ fontSize: "2rem" }}
              ></i>
              <span className="font-bold white-space-nowrap">
                <TextType variant={"h3"}>Добавить специалиста</TextType>
              </span>
            </span>
          ) as React.ReactNode
        }
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          {addSpecialistForm.map(
            ({ name, placeholder, icon, type = "text" }) => (
              <div className="p-inputgroup" key={name}>
                <span className="p-inputgroup-addon">
                  <i className={icon}></i>
                </span>
                <InputText
                  placeholder={placeholder}
                  name={name as keyof AddSpecialistFormData}
                  type={type}
                  onChange={handleInputsChange}
                  value={String(formData[name as keyof AddSpecialistFormData] ?? "")
                  }
                  className="p-2"
                  required
                />
              </div>
            )
          )}
          <div className="flex w-3 justify-content-between">
            <Dropdown
              checkmark={true}
              value={selectedSpecialization}
              onChange={(e) => {
                setSelectedSpecialization(e.value),
                  handleSpecializationChange(e);
              }}
              options={specializations}
              optionLabel="name"
              placeholder="Выберите специальность"
              className="p-2 w-8"
            />
            <InputNumber
              value={formData.salaryPercent}
              onValueChange={handleSalaryPercentChange}
              showButtons
              buttonLayout="horizontal"
              style={{ width: "4rem" }}
              decrementButtonClassName="p-button-secondary"
              incrementButtonClassName="p-button-secondary"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              max={100}
              size={1}
              className="flex-2"
            />
          </div>
          <Button color={"green"} type="submit" className="ml-auto mr-4">
            Добавить
          </Button>
        </form>
      </AccordionTab>
    </Accordion>
  );
};

export default AddSpecialist;
