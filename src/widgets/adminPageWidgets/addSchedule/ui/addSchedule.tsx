"use client";
import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { TabPanel, TabView } from "primereact/tabview";
import TextType from "@/shared/ui/textType/textType";
import AddIndividualSchedule from "./addIndividualSchedule/addIndividualSchedule";
import AddToGroupSchedule from "./addToGroupSchedule/addToGroupSchedule";
import CreateGroupSchedule from "./createGroupSchedule/createGroupSchedule";

const AddSchedule = () => {
  return (
    <Accordion activeIndex={null} expandIcon collapseIcon>
      <AccordionTab
        header={
          (
            <span className="flex align-items-center gap-2 p-2 w-full">
              <i
                className="pi pi-calendar-plus ml-3 mr-2"
                style={{ fontSize: "2rem" }}
              ></i>
              <span className="font-bold white-space-nowrap">
                <TextType variant={"h3"}>Создать расписпание</TextType>
              </span>
            </span>
          ) as React.ReactNode
        }
      >
        <TabView className="mt-3">
          <TabPanel header="Индивидуальное" headerClassName="ml-4 mb-2">
            <AddIndividualSchedule />
          </TabPanel>
          <TabPanel header="Добавить в групповое" headerClassName="ml-4 mb-2">
            <AddToGroupSchedule/>
          </TabPanel>
          <TabPanel header="Создать групповое" headerClassName="ml-4 mb-2">
            <CreateGroupSchedule/>
          </TabPanel>
        </TabView>
      </AccordionTab>
    </Accordion>
  );
};

export default AddSchedule;
