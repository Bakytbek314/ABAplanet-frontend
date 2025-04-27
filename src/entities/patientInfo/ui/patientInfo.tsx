import { useFormateDate } from "@/shared/lib/useFormateDate";
import { PatientInfoProps } from "./patientInfo.props";
import TextType from "@shared/ui/textType/textType";
import styles from "./patientInfo.module.scss";

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

  const renderField = (label: string, value: string) => (
    <div className={styles.info}>
      <div className={styles.info_title}>
        <TextType variant="bigP">{label}</TextType>
      </div>
      <div>
        <TextType variant="bigP">{value}</TextType>
      </div>
    </div>
  );

  return (
    <div className={styles.patient_info}>
      {renderField("Login", login)}
      {renderField("ФИО", `${firstName} ${lastName}`)}
      {renderField("Родитель", `${parentFirstName} ${parentLastName}`)}
      {renderField("Телефон", telephoneNumber)}
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant="bigP">Дата регистрации</TextType>
        </div>
        <div>
          <TextType variant="bigP">{useFormateDate(createdAt)}</TextType>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;