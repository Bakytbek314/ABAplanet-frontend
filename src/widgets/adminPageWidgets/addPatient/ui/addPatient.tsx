"use client";
import React, { useRef, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from "primereact/inputtext";
import { addPatientForm } from "@/shared/constants/addPatientForm";
import { AddPatientFormData } from "@/shared/types/fetchData.types";
import { addPatient } from "../api/addPatient";
import TextType from "@shared/ui/textType/textType";
import Button from "@/shared/ui/button/button";
import styles from "./addPatient.module.scss";

const AddPatient = () => {

  const [formData, setFormData] = useState<AddPatientFormData>({
    firstName: "",
    lastName: "",
    parentFirstName: "",
    parentLastName: "",
    login: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPatient(formData);
    setFormData({
      firstName: "",
      lastName: "",
      parentFirstName: "",
      parentLastName: "",
      login: "",
      password: "",
      phoneNumber: "",
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
                <TextType variant={"h3"}>Добавить пациента</TextType>
              </span>
            </span>
          ) as React.ReactNode
        }
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          {addPatientForm.map(({ name, icon, placeholder, type = "text" }) => (
            <div className="p-inputgroup" key={name}>
              <span className="p-inputgroup-addon">
                <i className={icon}></i>
              </span>
              <InputText
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={formData[name as keyof AddPatientFormData]}
                className="p-2"
                required
              />
            </div>
          ))}
          <Button color={"green"} type="submit">
            Добавить
          </Button>
        </form>
      </AccordionTab>
    </Accordion>
  );
};

export default AddPatient;
