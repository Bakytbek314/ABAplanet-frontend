"use client";
import { useEffect, useState } from "react";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";
import Button from "@/shared/ui/button/button";
import { useSpecialistScdulesStore } from "../../store/useSpecialistScdulesStore";

const ChangeSpecialist = () => {
  const { specialists, fetchSpecialists } = useSpecialistsStore();
  const { individual, group, mainGroup, fetchSpecialist } = useSpecialistScdulesStore();

  const [specialistId, setSpecialistid] = useState<number>(1);

  useEffect(() => {
    fetchSpecialist(specialistId);
  }, [ individual, group, mainGroup ]);

  useEffect(() => {
    fetchSpecialists();
  }, [specialists])

  return (
    <div className="flex gap-2 mb-4">
      {specialists.map((specialist) => (
        <Button
          key={specialist.id}
          color={ specialistId === specialist.id ? "green" : "grey"}
          onClick={() => setSpecialistid(specialist.id)}
        >
          {specialist.firstName}
        </Button>
      ))}
    </div>
  );
};

export default ChangeSpecialist;