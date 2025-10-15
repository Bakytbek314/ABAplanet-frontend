"use client";
import TestingPatient from "@/features/testingPatient/ui/testingPatient";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";
import TextType from "@/shared/ui/textType/textType";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";

const MyPatients = () => {
  const { currentUser } = useCurrentUser();

  return (
    <Accordion activeIndex={null} className="mt-2">
      {currentUser?.individualSession &&
        currentUser.individualSession
          .filter(
            (elem, index, self) =>
              index ===
              self.findIndex(
                (t) =>
                  t.patientId === elem.patientId
                  // Добавьте другие уникальные поля при необходимости
                  // && t.date === elem.date
              )
          )
          .map((elem) => (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 p-2 w-full">
                  <Avatar
                    shape="circle"
                    size="normal"
                  />
                  <span className="font-bold white-space-nowrap">
                    <TextType variant="bigP">
                      {elem.patient.firstName} {elem.patient.lastName}
                    </TextType>
                  </span>
                </span>
              }
              key={elem.id} // Используем уникальный ID вместо индекса
              className="mb-2"
            >
              <TestingPatient patientId={elem.patientId} />
            </AccordionTab>
          ))}
    </Accordion>
  );
};

export default MyPatients;
