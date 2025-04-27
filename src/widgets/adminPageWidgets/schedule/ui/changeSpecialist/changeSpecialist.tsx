"use client";
import { useEffect, useState } from "react";
import { useSpecialistsStore } from "@/shared/store/useSpecialistsStore";
import { useSpecialistScdulesStore } from "../../../../../shared/store/useSpecialistScdulesStore";
import Button from "@/shared/ui/button/button";

const ChangeSpecialist = () => {
  const { specialists, fetchSpecialists } = useSpecialistsStore();
  const { individual, group, mainGroup, fetchSpecialist } =
    useSpecialistScdulesStore();

  const [specialistId, setSpecialistid] = useState<number>(1);

  useEffect(() => {
    if (specialistId !== null) {
      fetchSpecialist(specialistId);
    }
  }, [specialistId]);

  useEffect(() => {
    fetchSpecialists();
  }, []);

  return (
    <div className="flex gap-2 mb-4">
      {specialists &&
        specialists.map((specialist) => (
          <Button
            key={specialist.id}
            color={specialistId === specialist.id ? "green" : "grey"}
            onClick={() => setSpecialistid(specialist.id)}
          >
            {specialist.firstName}
          </Button>
        ))}
    </div>
  );
};

export default ChangeSpecialist;
