import { useFormateDate } from "@/shared/lib/useFormateDate";
import styles from "./patientInfo.module.scss";
import TextType from "@text/*";
import { PatientInfoProps } from "./patientInfo.props";
import { Button } from "primereact/button";
import { useState } from "react";
import { InputText } from "primereact/inputtext";


const PatientInfo = (props: PatientInfoProps) => {
  const {
    firstName,
    lastName,
    parentFirstName,
    parentLastName,
    login,
    telephoneNumber,
    createdAt,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    login,
    firstName,
    lastName,
    parentFirstName,
    parentLastName,
    telephoneNumber,
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const renderField = (label: string, value: string, name: string) => (
    <div className={styles.info}>
      <div className={styles.info_title}>
        <TextType variant="bigP">{label}</TextType>
      </div>
      <div>
        {isEditing ? (
          <InputText
            name={name}
            value={value}
            onChange={handleChange}
            className="p-2"
          />
        ) : (
          <TextType variant="bigP">{value}</TextType>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.patient_info}>
      {renderField("Login", formData.login, "login")}
      {renderField("ФИО", `${formData.firstName} ${formData.lastName}`, "firstName")}
      {renderField(
        "Родитель",
        `${formData.parentFirstName} ${formData.parentLastName}`,
        "parentFirstName"
      )}
      {renderField("Телефон", formData.telephoneNumber, "telephoneNumber")}
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant="bigP">Дата регистрации</TextType>
        </div>
        <div>
          <TextType variant="bigP">{useFormateDate(createdAt)}</TextType>
        </div>
      </div>
      {isEditing ? (
        <Button label="Сохранить" onClick={handleSave} color="green" className="p-1 mt-2" />
      ) : (
        <Button label="Изменить" onClick={toggleEdit} className="p-1 mt-2"/>
      )}
    </div>
  );
};

export default PatientInfo;