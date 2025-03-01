"use client";
import { useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import SpecialistCard from "./specialistCard/specialistCard";
import { useSpecialistCardStore } from "../store/useSpecialistCardStore";
import TextType from "@/shared/ui/textType/textType";
import Gallery from "./gallary/gallary";

const ManageMainPageContent = () => {
  const { cards, fetchCards } = useSpecialistCardStore();

  const header = (text: string) => (
    <TextType variant={"bigP"} className="p-2">
      {text}
    </TextType>
  );

  useEffect(() => {
    fetchCards();
  }, [cards]);
  return (
    <Accordion activeIndex={null} className="flex flex-column gap-2">
      <AccordionTab header={header("Карточки специалистов")}>
        <div className="flex gap-2">
          {cards &&
            cards.map((card) => (
              <SpecialistCard
                id={card.id}
                specialistId={card.specialistId}
                photo={card.photo}
                diplomaPhoto={card.diplomaPhoto}
                description={card.description}
                key={card.id}
              />
            ))}
        </div>
      </AccordionTab>
      <AccordionTab header={header("Галерея")}>
        <Gallery />
      </AccordionTab>
    </Accordion>
  );
};

export default ManageMainPageContent;
