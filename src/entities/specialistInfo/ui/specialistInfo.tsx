import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useFormateDate } from "@/shared/lib/useFormateDate";
import { SpecialistInfoProps } from "./specialistInfo.props";
import { specializations } from "@/shared/constants/addSpecialistForm";
import TextType from "@/shared/ui/textType/textType";
import styles from "./specialistInfo.module.scss";

const SpecialistInfo = (props: SpecialistInfoProps) => {
  const {
    firstName,
    lastName,
    login,
    telephoneNumber,
    createdAt,
    specialization,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    login,
    firstName,
    lastName,
    specialization,
    telephoneNumber,
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSpecializationChange = (e: DropdownChangeEvent) => {
    setFormData({ ...formData, specialization: e.value.name });
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
    <div className={styles.specialist_info}>
      {renderField("Login", formData.login, "login")}
      {renderField("ФИО", `${formData.firstName} ${formData.lastName}`, "firstName")}
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant="bigP">Специальность</TextType>
        </div>
        <div>
          {isEditing ? (
            <Dropdown
              value={1}
              options={specializations}
              onChange={handleSpecializationChange}
              optionLabel="name"
              placeholder="Выберите специальность"
              className="p-2"
            />
          ) : (
            <TextType variant="bigP">{formData.specialization}</TextType>
          )}
        </div>
      </div>
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
        <Button label="Изменить" onClick={toggleEdit} className="p-1 mt-2" />
      )}
    </div>
  );
};

export default SpecialistInfo;