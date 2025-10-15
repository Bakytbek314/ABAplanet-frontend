import { useFormateDate } from "@/shared/lib/useFormateDate";
import { SpecialistInfoProps } from "./specialistInfo.props";
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
    <div className={styles.specialist_info}>
      {renderField("Login", login)}
      {renderField("ФИО", `${firstName} ${lastName}`)}
      {renderField("Специальность", specialization)}
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

export default SpecialistInfo;