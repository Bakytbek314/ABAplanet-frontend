import TextType from "@text/*";
import styles from "./specialistInfo.module.scss";
import { SpecialistInfoProps } from "./specialistInfo.props";
import { useFormateDate } from "@/shared/lib/useFormateDate";

const SpecialistInfo = (props: SpecialistInfoProps) => {

    const {
        firstName,
        lastName,
        login,
        telephoneNumber,
        createdAt,
        specialization
      } = props;

    return (
        <div className={styles.specialist_info}>
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
                    <TextType variant={"bigP"}>{firstName} {lastName}</TextType>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>Специальность</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{specialization}</TextType>
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

export default SpecialistInfo;