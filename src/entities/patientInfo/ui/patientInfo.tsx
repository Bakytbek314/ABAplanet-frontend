import { useFormateDate } from "@/shared/lib/useFormateDate";
import styles from "./patientInfo.module.scss";
import TextType from "@text/*";
import { PatientInfoProps } from "./patientInfo.props";

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

  return (
    <div className={styles.patient_info}>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant={"bigP"}>Login</TextType>
        </div>
        <div>
          <TextType variant={"bigP"}>{login}</TextType>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant={"bigP"}>ФИО</TextType>
        </div>
        <div>
          <TextType variant={"bigP"}>
            {firstName} {lastName}
          </TextType>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant={"bigP"}>Родитель</TextType>
        </div>
        <div>
          <TextType variant={"bigP"}>
            {parentFirstName} {parentLastName}
          </TextType>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant={"bigP"}>Телефон</TextType>
        </div>
        <div>
          <TextType variant={"bigP"}>{telephoneNumber}</TextType>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <TextType variant={"bigP"}>Дата регистрации</TextType>
        </div>
        <div>
          <TextType variant={"bigP"}>{useFormateDate(createdAt)}</TextType>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
