"use client";
import PatientSchedule from "@/entities/patientSchedule/ui/patientSchedule";
import SpecialistSchedule from "@/entities/specialistSchedule/ui/specialistSchedule";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";

const AccountSchedule = () => {
  const { currentUser, user } = useCurrentUser();

  if (user?.role === "PATIENT") {
    return (
      <PatientSchedule
        individualSession={currentUser?.individualSession as []}
        groupSessions={currentUser?.groupSessions as []}
        patientId={currentUser?.id as number}
      />
    );
  }

  if (user?.role === "SPECIALIST") {
    return (
      <SpecialistSchedule
      groupSessions={currentUser?.groupSessions as []}
      individualSession={currentUser?.individualSession as []}
      />
    );
  }
};

export default AccountSchedule;
