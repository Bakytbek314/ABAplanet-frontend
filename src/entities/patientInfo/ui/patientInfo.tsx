import styles from "./patientInfo.module.scss";
import TextType from "@text/*";

const PatientInfo = () => {
    return (
        <div className={styles.patient_info}>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>Login</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{}</TextType>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>ФИО</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{}</TextType>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>Возраст</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{}</TextType>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>Родитель</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{}</TextType>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>Телефон</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{}</TextType>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>
                    <TextType variant={"bigP"}>Дата регистрации</TextType>
                </div>
                <div>
                    <TextType variant={"bigP"}>{}</TextType>
                </div>
            </div>
        </div>
    );
};

export default PatientInfo;