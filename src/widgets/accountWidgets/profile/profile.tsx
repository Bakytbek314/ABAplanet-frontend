import PatientFinance from "@/entities/patientFinance/ui/patientFinance";
import ProfileCard from "@/entities/profileCard/ui/profileCard";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";
import { PatientsData } from "@/shared/types/fetchData.types";

const Profile = () => {
  const { currentUser, user } = useCurrentUser();

  const isPatient = user?.role === "PATIENT";

  return (
    <section>
      <ProfileCard
        firstName={currentUser?.firstName as string}
        lastName={currentUser?.lastName as string}
        login={currentUser?.user?.login as string}
        parentFirstName={
          isPatient ? (currentUser as PatientsData)?.parentFirstName : undefined
        }
        parentLastName={
          isPatient ? (currentUser as PatientsData)?.parentLastName : undefined
        }
      />

      {isPatient && (
        <PatientFinance
          patientId={currentUser?.id as number}
          debts={(currentUser as PatientsData)?.debts}
          payments={(currentUser as PatientsData)?.payments}
        />
      )}
    </section>
  );
};

export default Profile;
