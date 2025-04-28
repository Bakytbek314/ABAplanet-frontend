import TextType from "@/shared/ui/textType/textType";
import { ProfileCardProps } from "./profileCard.props";
import styles from "./profileCard.module.scss";
import { Avatar } from "primereact/avatar";
import { useFormateDate } from "@/shared/lib/useFormateDate";

const ProfileCard = (props: ProfileCardProps) => {
  const { firstName, lastName, login, parentFirstName, parentLastName } = props;
  return (
    <div className={styles.profile_card}>
      <div className={styles.avatar}>
        <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
      </div>
      <div className={styles.text}>
        <TextType variant="bigP" align="center">
          {firstName} {lastName}
        </TextType>
        <TextType variant="bigP" align="center">{login}</TextType>
        {(parentFirstName && parentLastName) && (
          <TextType variant="mediumP" align="center">
            {parentFirstName} {parentLastName}
          </TextType>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
